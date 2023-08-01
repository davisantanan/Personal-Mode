import api from "../api/api";


export interface studentsDetails {
    name: string,
    age: number,
    id: number,
    telNumber: number,
    dayOfTheWeek: string
};

const getAll = async (page = 1, filter= '') => {
    try {
        const { data, headers } = await api.get(`/alunos?_page=${page}&_limit=8&name_like=${filter}`);
        if(data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'])
            }
        };

        return new Error('Erro ao encontrar os alunos');
    } catch (error) {
        console.log(error);
        return new Error((error as {message: string}).message || 'Erro ao encontrar os alunos');
    }
};

const getById = async (id:number) => {
    try {
        const { data } = await api.get(`/alunos/${id}`);
        if(data) {
            return data
        };
        return new Error('Erro ao consultar aluno');
    } catch (error) {
        console.log(error);
        return new Error((error as {message: string}).message || 'Erro ao consultar aluno');
    }
};

const create = async (dataStudents: Omit<studentsDetails, 'id'>) => {
    try {
        const { data } = await api.post<studentsDetails>('/alunos', dataStudents);
        if(data) {
            alert('Aluno criado com sucesso');
        }
        return new Error('Erro ao criar aluno');
    } catch (error) {
        console.log(error);
        return new Error((error as {message: string}).message || 'Erro ao criar aluno');
    }
};

const updateById = async (id:number, dataStudents:studentsDetails) => {
    try {
        await api.put(`/alunos/${id}`, dataStudents);
    } catch (error) {
        console.log(error);
        return new Error((error as {message: string}).message || 'Erro ao editar registro');
    }
};

const deleteById = async (id:number) => {
    try {
        await api.delete(`/alunos/${id}`);
        alert('Registro apagado com sucesso');
    } catch (error) {
        console.log(error);
        return new Error((error as {message: string}).message || 'Erro ao apagar registro');
    }
};

export const studentsService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};
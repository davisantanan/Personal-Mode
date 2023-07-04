import api from "../api/api"

const getAll = async (page = 1, filter= '') => {
    try {
        const { data, headers } = await api.get(`/alunos?_page=${page}&_limit=10&name_like=${filter}`);
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

const getById =async () => {
    
};

const create =async () => {
    
};

const updateById =async () => {
    
};

const deleteById =async () => {
    
};

export const studentsService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}
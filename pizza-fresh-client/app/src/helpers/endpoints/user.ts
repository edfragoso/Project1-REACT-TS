import { endpoint } from 'helpers/endpoints';

export const user = {
    create: () => `${endpoint.baseUrl}/user`,
    listUser: () => `${endpoint.baseUrl}/user`,
    userById: (id: string) => `${endpoint.baseUrl}/user/${id}`,
};
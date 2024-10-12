import { B } from "@expo/html-elements";

export const UseAPi = () => {

    const formatFilter = (field: string, filterMethod: filterMethodEnum, param: string) => {
        return `${filterMethod}.${param}`;
        // Coluna=ilike.ValorDeBusca
    }

    const handleURL = (data: useApiParams): string => {

        const url = new URLSearchParams({
            ...(data.select && { select: data.select }),
            ...(data.sort && { sort: data.sort }),
            ...(data.filter && { [data.filter.field]: formatFilter(data.filter.field, data.filter.method, data.filter.param) }),
        });
        return url.toString();
    }

    const fetchApi = async (path: string, params: useApiParams) => {
        const baseUrl = 'https://mggpqhkgbjckoeptuicz.supabase.co/rest/v1/';
        const requestURL = baseUrl + path;
        const apiKey = process.env.EXPO_PUBLIC_API_KEY as string;

        const api = params ? `${requestURL}?${handleURL(params)}` : requestURL;
        const response = await fetch(api, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Range': `0-${params.limit || '0-10'}`,
                'Bearer': 'Bearer ' + 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nZ3BxaGtnYmpja29lcHR1aWN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1NDMxNjAsImV4cCI6MjA0MzExOTE2MH0.PQMsEc6OVWMIQoBKplZ0r2gJCP_oIlRYc3uIOoP7k7E',
                'apiKey': apiKey,
            },
        });
        return response.json();
    };

    return {
        fetchApi,
    };
}

export enum filterMethodEnum {
    eq = 'eq',
    ne = 'ne',
    gt = 'gt',
    gte = 'gte',
    lt = 'lt',
    lte = 'lte',
    in = 'in',
    nin = 'nin',
    like = 'like',
    nlike = 'nlike',
    ilike = 'ilike',
    isnull = 'isnull',
    notnull = 'notnull',
    between = 'between',
    nbetween = 'nbetween',
    and = 'and',
    or = 'or',
    not = 'not',
}

export type useApiParams = {
    select?: string;
    filter?: {
        field: string;
        method: filterMethodEnum;
        param: string;
    };
    sort?: string;
    limit?: number;

}
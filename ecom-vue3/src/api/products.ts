import request from '@/utils/request'

export function getProducts() {
    return request({
        url: '/products',
        method: 'get'
    })
}

export function getProduct(id: number) {
    return request({
        url: `/products/${id}`,
        method: 'get'
    })
}
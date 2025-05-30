<template>
    <div>
        Домашняя страница
        <div class="flex gap-3 items-center">
            <router-link to="/favourites">
                Избранное
            </router-link>

            <router-link to="/cart">
                Корзина
            </router-link>

            <router-link to="/product/1">
                Товар 1
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>
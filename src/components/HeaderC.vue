<template>
    <header class="header">
        <h1 class="header_title">
            Добавление товара
        </h1>
        <select class="header__sort-select">
            <option value="all" selected>По умолчанию</option>
            <option value="title">по имени</option>
            <option value="description">по описанию</option>
        </select>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px auto 20px;
}

.header_title {
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 5px;
}

.header__sort-select {
    width: 141px;
    height: 36px;
    border: 0;
    background-color: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 10px 16px;
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12px;
    color: #B4B4B4;
}

.header__sort-select:focus {
    outline: 1px solid #57A639;
}

@media (min-width: 768px) {

.header {
    flex-direction: row;
    justify-content: space-between;
    margin: 32px 32px 16px;
}

.header_title {
    margin-bottom: 0;
}

}

@media (min-width: 1440px) {

.header {
    margin-left: 0;
    margin-right: 0;
}

}

</style>
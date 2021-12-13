<template>
  
    <form action="#" class="main__form form">
        
        <label class="form__label" for="itemTitle">
            Наименование товара
            <span class="required-item"></span>
        </label>
        <input type="text" class="form__input" id="itemTitle" placeholder="Введите наименование товара"
            v-model.trim="card.title"
            :class="{invalid: isTitleInvalid}"
        />
        <span class="form__invalid-text"  v-if="isTitleInvalid">Поле является обязательным</span>

        
        
        <label class="form__label" for="itemDescription">
            Описание товара
        </label>
        <textarea class="form__textarea" id="itemDescription" cols="30" rows="10" maxlength="250" placeholder="Введите описание товара"
            v-model.trim="card.description"
        ></textarea>



        <label class="form__label" for="itemLink">
            Ссылка на изображение товара
            <span class="required-item"></span>
        </label>
        <input type="url" id="itemLink" class="form__input" placeholder="Введите ссылку"
            v-model.trim="card.image"
            :class="{invalid: isLinkInvalid}"
        />
        <span class="form__invalid-text" v-if="isLinkInvalid">Поле является обязательным</span>



        <label class="form__label" for="itemPrice">
            Цена товара
            <span class="required-item"></span>
        </label>
        <input type="number" id="itemPrice" class="form__input" placeholder="Введите цену"
            v-model="card.price"
            :class="{invalid: isPriceInvalid}"
        />
        <span class="form__invalid-text" v-if="isPriceInvalid">Поле является обязательным</span>



        <button type="submit" class="form__submit-btn form__submit-btn_not-active"
            @click.prevent="checkForm"
            :class="{'form__submit-btn_active': this.card.title && this.card.image && this.card.price }"
        >Добавить товар</button>

    </form>

</template>

<script>
import { mapActions } from 'vuex';

export default {

    data() {
        return {
            card: {
                "id": "",
                "title": "",
                "description": "",
                "image": "",
                "price": "",
                "showCart": false
            },
            isTitleInvalid: false,
            isLinkInvalid: false,
            isPriceInvalid: false,
        }
    },

    methods: {
        checkForm() {
            if (!this.card.title || !this.card.image || !this.card.price) {
                !this.card.title ? this.isTitleInvalid = true : this.isTitleInvalid = false;
                !this.card.image ? this.isLinkInvalid = true : this.isLinkInvalid = false;
                !this.card.price ? this.isPriceInvalid = true : this.isPriceInvalid = false;
            } else {
                this.saveNewCard();
            };
        },
        saveNewCard() {
            this.card.id = Date.now();

            this.addCard(this.card);

            this.updateHeaderTitle("Товар добавлен");

            this.clearForm();
        },
        clearForm() {
            this.card.title = '';
            this.card.description = '';
            this.card.image = '';
            this.card.price = '';
            this.isTitleInvalid = false;
            this.isLinkInvalid = false;
            this.isPriceInvalid = false;
        },

        ...mapActions({
            addCard: 'addCard',
            updateHeaderTitle: 'updateHeaderTitle',
        }),
    },

}
</script>

<style scoped>

.main__form {
    margin-bottom: 20px;
}

.form {
    display: flex;
    flex-direction: column;
    max-width: 332px;
    padding: 15px;
    background-color: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
}

.form__label {
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;
    margin-bottom: 4px;
}

.form__input {
    width: 284px;
    height: 36px;
    background-color: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 10px 16px;
    font-size: 12px;
    margin-bottom: 16px;
}

.form__input::placeholder,
.form__textarea::placeholder {
    color: #B4B4B4;
}

.invalid {
    border: 1px solid #FF8484;
    outline: none;
    margin-bottom: 4px;
}

.form__invalid-text {
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #FF8484;
    margin-bottom: 2px;
}

.form__textarea {
    width: 284px;
    height: 108px;
    background-color: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 10px 16px;
    font-size: 12px;
    margin-bottom: 16px;
    resize: none;
}

.form__submit-btn {
    width: 284px;
    height: 36px;
    margin-top: 8px;
    border-radius: 10px;
}

.form__submit-btn_not-active {
    background-color: #EEEEEE;
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #B4B4B4;
}

.form__submit-btn_active {
    background: #7BAE73;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
}

.required-item {
    display: inline-block;
    width: 4px;
    height: 10px;
    background-image: url('../assets/img/circle.svg');
    background-repeat: no-repeat;
}

@media (min-width: 375px) {

.form {
    max-width: 332px;
    padding: 24px;
}

}

@media (min-width: 768px) {

.main__form {
    margin-bottom: 0;
}

.form {
    max-height: 440px;
    padding: 24px;
    margin-left: 10px;
}

}

@media (min-width: 1440px) {

.main__form {
    margin-left: 0;
}

}

</style>
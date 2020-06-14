// Шаблон для регулярного выражения
const st = new RegExp('^(?![×÷])[0-9A-Za-zÀ-ÿ][а-яА-ЯёЁ] +');
if (!st.test(this.state.message)){
    this.props.readMessage(this.state.message);}


// Styling background with color or image
const avatarStyle = avatarUrl !== "false" ? {background: 'url('+avatarUrl+')'} : {background: color};


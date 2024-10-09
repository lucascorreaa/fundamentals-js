const perfil = ''

if (perfil === 'administrador') {
    return console.log('Bem-vindo(a), administrador!')
} else if (perfil === 'moderador') {
    return console.log('Bem-vindo(a), moderador! Você pode gerenciar o conteúdo.')
} switch(perfil) {
    case 'assinante': return console.log('Olá, assinante! aproveite o conteúdo disponível.');
} let = perfil === '' ? console.log('Perfil não especificado') : console.log('Acesso negado')
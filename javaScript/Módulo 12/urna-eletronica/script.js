const [query, queryA] = [(select)=>document.querySelector(select), (select)=>document.querySelectorAll(select)]

let [seuVotoPara, cargo, numeros, descricao, aviso, lateral] = [query('.d-1-1 span'), query('.d-1-2 span'), query('.d-1-3'), query('.d-1-4'), query('.d-2'), query('.d-1-right')];
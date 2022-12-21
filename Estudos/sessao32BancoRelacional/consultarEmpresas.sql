select e.nome Empresa, c.nome Cidade from empresas e, emmpresas_unidades eu, cidades c where e.id = eu.empresa_id
and c.id = eu.cidade_id and sede 
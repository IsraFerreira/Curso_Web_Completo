insert into empresas (nome, cnpj) values ('Bradesco', 95694186000132),
('Vale', 27887148000146),
('Cielo', 01598317000134);

ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

desc empresas;
desc prefeitos;
select * from empresas;
select * from cidades;

insert into emmpresas_unidades (empresa_id, cidade_id, sede) values (1, 1, 1),
(1, 2, 0),
(2, 1, 0),
(2, 2, 1);


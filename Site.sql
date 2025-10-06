create database ecommerce;
use ecommerce;

create table pessoa(
	id int auto_increment primary key,
	nome varchar(40) not null,
    cpf char(11) not null,
    email varchar(50) not null unique,
    senha int not null
);

create table produto(
	id_produto int auto_increment primary key,
	nome varchar(40) not null,
	preco int not null,
    descricao varchar(200) not null
);

create table carrinho(
	id_carrinho int auto_increment primary key,
    id_produto int not null,
    id_pessoa int not null,
    quantidade varchar(10) not null,
    foreign key (id_produto) references produto (id_produto),
    foreign key (id_pessoa) references pessoa (id)
);

create table finalizar_compra (
	id int auto_increment not null primary key,
	tipo_pagamento char(1) not null,
    id_pessoa int not null,
    valor_total float not null,
    data_compra date,
    pix varchar(15),
    num_card char(16),
    nome_completo varchar(30),
    validade char(5),
    digito char(3),
    parcelas int,
    foreign key (id_pessoa) references pessoa(id)
);

INSERT INTO produto(nome, preco, descricao) VALUES 
('Charmander', 20, 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.'),
('Charmeleon', 50, 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.'),
('Charizard', 100, 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.'),
('Bulbasaur', 20, 'There is a plant seed on its back right from the day this Pokémon is born. The seeds lowly grows larger.'),
('Ivysaur', 50, 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.'),
('Venusaur', 100, 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.'),
('Squirtle', 20, 'When it retracts its long neck into its shell, it squirts out water with vigorous force.'),
('Wartortle', 50, 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old'),
('Blastoise', 100, 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.'),
('Caterpie', 20, 'For protection, it releases a horrible stench from the antenna on its head to drive away enemies.'),
('Metapod', 50, 'It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.'),
('Butterfree', 100, 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.'),
('Weedle', 20, 'Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.'),
('Kakuna', 50, 'Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.'),
('Beedrill', 100, 'It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.'),
('Pidgey', 20, 'Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.'),
('Pidgeotto', 50, 'This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.'),
('Pidgeot', 100, 'This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.'),
('Spearow', 20, 'Inept at flying high. However, it can fly around very fast to protect its territory.'),
('Fearow', 50, 'A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.'),
('Ekans', 20, 'The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.'),
('Arbok', 50, 'The frightening patterns on its belly have been studied. Six variations have been confirmed.'),
('Pichuu', 50, 'Despite its small size, it can zap even adult humans. However, if it does so, it also surprises itself.'),
('Pikachu', 100, 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.'),
('Raichu', 150, 'Its long tail serves as a ground to protect itself from its own high-voltage power.'),
('Nidoran', 20, 'Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators.'),
('Nidorina', 50, 'The horn on its head has atrophied. It’s thought that this happens so Nidorina’s children won’t get poked while their mother is feeding them.'),
('Nidoqueen', 100, 'Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.'),
('Nidoran', 20, 'The horn on a male Nidoran’s forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.'),
('Nidorino', 50, 'With a horn that’s harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone.'),
('Nidoking', 100, 'When it goes on a rampage, it’s impossible to control. But in the presence of a Nidoqueen it’s lived with for a long time, Nidoking calms down.');

select * from carrinho;

select * from produto;

select * from pessoa;

select * from finalizar_compra;


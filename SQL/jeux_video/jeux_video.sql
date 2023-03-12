-- select * from jeux_video;

-- Afficher tous les possesseur une fois
select  distinct possesseur from jeux_video;

-- Afficher tous les jeux qui ont un prix inférieur à 10
select nom from jeux_video where prix<10;

-- Afficher le prix minimum, moyens et maximum des jeux
select avg(prix) as moyenne, min(prix) , max(prix) from jeux_video;

-- Afficher le prix minimum et maximum des jeux et donner leurs noms
select nom, prix from jeux_video where prix=(select min(prix) from jeux_video)or prix=(select max(prix) from jeux_video);
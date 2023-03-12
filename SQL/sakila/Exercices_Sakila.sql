-- Quels acteurs portent le prénom "Scarlett" ?
-- SELECT * FROM actor WHERE first_name = "Scarlett";

-- Quels acteurs portent le nom de famille "Johansson"?
-- SELECT * FROM actor WHERE last_name = "Johansson";

-- Combien y a-t-il de noms de famille d'acteurs distincts ?
-- SELECT count(DISTINCT last_name) FROM actor; 

-- Quels noms de famille ne se répètent pas ?
-- SELECT last_name FROM actor GROUP BY last_name HAVING count(last_name)=1;

-- Quels noms de famille apparaissent plus d'une fois ?
-- SELECT last_name FROM actor GROUP BY last_name HAVING count(last_name)>1

-- Quel acteur a joué dans le plus de films ?
-- SELECT first_name, last_name, count(actor_id) as nbrFilm FROM actor JOIN film_actor using(actor_id) GROUP BY actor_id order by nbrFilm desc limit 1

-- Est-ce que "Academy Dinosaur" est disponible à la location dans le magasin 1 ?
-- SELECT * FROM film JOIN inventory using(film_id) WHERE title="ACADEMY DINOSAUR" AND store_id=1 limit 1

-- on actor.actor_id=film_actor.actor_id
-- =
-- using(actor_id)

-- Dans la table actor :

-- Compter le nombre d’acteur ayant le même nom de famille
-- SELECT last_name, count(last_name) as nbrPersonne FROM actor group by last_name

-- Donner l’actor_id pour une actrice ou un acteur choisi
-- SELECT actor_id FROM actor WHERE first_name="" AND last_name=""

-- //Jointure actor et film_actor:
-- Trouver tous les films_id pour une actrice ou un acteur choisi
-- SELECT film_id FROM actor JOIN film_actor using(actor_id) WHERE first_name="KARL" AND last_name="BERRY"

-- //Double jointure actor, film_actor et film:
-- Trouver tous les titres de film pour une actrice ou un acteur choisi
-- SELECT title FROM film INNER JOIN film_actor using(film_id) INNER JOIN actor using(actor_id) WHERE first_name="KARL" AND last_name="BERRY"

-- //Choisir un film: LIAISONS SWEET:
-- Donner le nombre de fois que ce film a été loué
-- SELECT count(inventory_id) FROM film INNER JOIN inventory using(film_id) INNER JOIN rental using(inventory_id) WHERE title="LIAISONS SWEET"

-- l’adresse_id des vidéo clubs où se film a été loué, afficher les valeurs uniques
-- SELECT DISTINCT address_id FROM film INNER JOIN inventory using(film_id) INNER JOIN rental using(inventory_id) INNER JOIN customer using(customer_id) WHERE title="LIAISONS SWEET"

-- le nom et le prénom de toutes les personnes ayant loué ce film (uniques)
-- SELECT DISTINCT first_name, last_name FROM film INNER JOIN inventory using(film_id) INNER JOIN rental using(inventory_id) INNER JOIN customer using(customer_id) WHERE title="LIAISONS SWEET"
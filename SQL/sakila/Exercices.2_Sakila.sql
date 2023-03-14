

-- //Duel avec Benoit
-- Récupérer les numéros de téléphones des clients appartenants au store 1 et commençant par 2.
-- SELECT phone, store_id FROM customer JOIN address using(address_id) WHERE store_id=1 AND phone LIKE "2%"

-- Classer tous les films par language et faire une moyenne de chaque language, trier par ordre croissant.
-- SELECT name as Langue, avg(language_id) FROM film JOIN language using(language_id) group by language_id

-- Répertorier tous les acteurs et les films par ordre d’apparition dans les films et comptabiliser les apparitions. Classer par nombres croissant d’apparitions.
/*SELECT actor_id, actor.first_name, actor.last_name, count(actor_id) as apparition FROM actor JOIN film_actor using(actor_id)
								  JOIN film using(film_id)
group by actor_id
order by apparition */
/*SELECT title, count(actor_id) as nbrActeur FROM actor JOIN film_actor using(actor_id)
													  JOIN film using(film_id)
group by title
order by nbrActeur */

-- Calculer la somme totale dépensé par chaque client et afficher son nom, prénom et adresse complète 
-- SELECT concat(customer.first_name,' ',customer.last_name) as identite, sum(amount) as depense, address.address FROM payment JOIN customer using(customer_id) JOIN address using(address_id) group by address.address, identite



-- Pour connaître les acteurs qui ont joué dans au moins un film
-- SELECT concat(first_name,' ',last_name) as identite FROM actor JOIN film_actor using(actor_id) JOIN film using(film_id) group by identite having count(film_id)>1

-- Trouver qui a loué un film en particulier. (FACTORY DRAGON)
/*SELECT concat(first_name,' ',last_name) as identite FROM customer JOIN rental using(customer_id)
																    JOIN inventory using(inventory_id)
                                                                    JOIN film using(film_id)


-- Ce qu’a dépensé chaque client en concaténant les noms et prénoms des clients
-- SELECT concat(customer.first_name,' ',customer.last_name) as identite, sum(amount) as depense FROM payment JOIN customer using(customer_id) group by identite

-- Pour connaître les acteurs qui ont joué dans au moins un film
-- SELECT concat(first_name,' ',last_name) as identite FROM actor JOIN film_actor using(actor_id) JOIN film using(film_id) group by identite having count(film_id)>1

-- Trouver qui a loué un film en particulier. (FACTORY DRAGON)
/*SELECT concat(first_name,' ',last_name) as identite FROM customer JOIN rental using(customer_id)
																    JOIN inventory using(inventory_id)
                                                                    JOIN film using(film_id)
WHERE film.title="FACTORY DRAGON"*/

-- Quels sont les films qui n’ont jamais été loués
-- SELECT film.title FROM film WHERE not exists (SELECT * FROM rental JOIN inventory using(inventory_id) where inventory.film_id = film.film_id)

-- Les 5 catégories qui rapportent le plus d’argent.
-- SELECT category.name, sum(payment.amount) as benefice FROM category join film_category using(category_id) join film using(film_id) join inventory using(film_id) join rental using(inventory_id) join payment using(rental_id) group by category.name order by benefice desc limit 5

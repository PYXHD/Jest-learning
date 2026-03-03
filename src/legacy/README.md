# Legacy - Objectif d'apprentissage

Ce dossier simule du code legacy, qui n'a pas été écrit avec une approche orientée test.

## Pourquoi ce dossier ?

L'objectif est d'apprendre à :

- tester du code déjà existant sans le modifier au départ
- identifier les dépendances difficiles à isoler
- gérer les effets de bord (Date, fetch, timers, etc...)
- écrire des tests de caractérisation
- refactorer en sécurité grâce aux tests

## Méthodologie

1. écrire des tests autour du comportement actuel du code
2. tester les cas nominaux et les cas d'erreur
3. geler le comportement existant
4. refactorer progressivement pour améliorer la testabilité
5. comparer avant / après

## Ce que je cherche à développer

- une compréhension réelle des mocks
- une meilleure gestion de l'async
- une approche orientée robustesse (edge cases, erreurs)
- une capacité à sécuriser du code en production

=> Ce dossier est un espace d'entraînement pour simuler des situations réelles rencontrées en entreprise

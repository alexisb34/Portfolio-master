Projet dévellopé en React / Css Tailwind
Pour le back utilisation de strapi
Hébergement sur AWS, connexion au serveur depuis WSL pour la partie front (dossier: portfolio): "ssh -i "clef_PEM.pem" admin@ec2-3-92-204-223.compute-1.amazonaws.com"
Hébergement du back (strapi) à cette adresse: "https://api.alexis-bengel.fr/"

Pour des modifications depuis le serveur: penser à "npm run build"
ensuite supprimer l'ancien build avec "sudo rm -r /var/www/html/www.alexis-bengel.fr/*" ensuite aller dans build
"sudo mv * /var/www/html/www.alexis-bengel.fr/"
relancer appache "sudo systemctl restart apache2"

Site accessible à ce nom de domaine: "alexis-bengel.fr"
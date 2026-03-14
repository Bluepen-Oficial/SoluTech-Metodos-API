git add .
read -p "Mensagem Commit:" $mensagem
git commit -m mensagem
git push -u origin main

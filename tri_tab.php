<?php 
print_r("\n =======================================");
echo "\n tri par selection";
echo "\n";
$i = 0;
$j = 0;

$array_messy = [3, 9, 7, 1, 2, 2, 8, 4, 5];
$n = count($array_messy);

for($i=0;$i<$n-1;$i++){
    $min = $i;
    for($j=$i+1;$j < $n-2;$j++){
        if($array_messy[$j] < $array_messy[$min]){
            $min=$j;
        }
    }
    if($min!=$i){
        $array_messy[$i] = $array_messy[$min];
    }
}

print_r($array_messy);
print_r("\n =======================================");
echo "\n tri par insertion";
echo "\n";
// tri par insertion

$array_messy1 = [3, 9, 7, 1, 2, 2, 8, 4, 5];
//je stock dans une variable la taille du tableau
$n = count($array_messy1);
//je parcours le tableau
for ($i=1;$i < $n;$i++){
    //je stock la valeur a l'index dans une valeur temporaire
    $x=$array_messy1[$i];
    //je met les deux index au meme niveau
    $j=$i;
    //decalage des elements du tableau
    while($j>0 && $x< $array_messy1[$j-1]){
        $array_messy1[$j]=$array_messy1[$j-1];
        $j=$j-1;
    }
    //insertion de l'element a sa place
    $array_messy1[$j]=$x;
}
print_r($array_messy1);

print_r("\n =======================================");
echo "\n tri a bulle";
echo "\n";
//je pousse la p;lus grande valeur vers la droite du tableau
$array_messy2 = [3, 9, 7, 1, 2, 2, 8, 4, 5];
//premiere boucle pour parcourir le tableau jusqu'a l'avant derniere case
for ($i= 1;$i<$n-1;$i++ ){
    //
    for ($j = 0; $j < $n-$i;$j++){
        //je verifie si la valeur de l'index actuel si elle est plus grande que la valeur d'après
        if($array_messy2[$j+1]< $array_messy2[$j]){
            //je prends la valeur a l'index actuel pour la mettre dans une variable
            $x = $array_messy2[$j];
            //la valeur de l'index suivant est mise a la place de la valeur actuelle
            $array_messy2[$j] = $array_messy2[$j+1];
            //je fini par mettre la valeur que j'avais stocké a l'index suivant 
            $array_messy2[$j+1] = $x;
    
        }
    }
}
print_r($array_messy2);
print_r("\n =======================================");
echo "\n tri de shell";
echo "\n";
$i=0;
$j=0;
?>

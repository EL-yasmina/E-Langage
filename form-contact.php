
<?php
    $connect = mysqli_connect("localhost","root","","elangage");
    if($connect){
        if(isset($_POST['envoyer'])){
            echo
            $nom= $_POST['nom'];
            $prenom= $_POST['prenom'];
            $email= $_POST['email'];
            $telephone= $_POST['telephone'];
            $cours= $_POST['cours'];
            $mesage= $_POST['mesage'];
             
            $query= "INSERT INTO tablecontact(nom,prenom,email,telephone,cours,mesage) VALUES ('$nom','$prenom','$email',$telephone,'$cours','$mesage')";
            $result= mysqli_query($connect,$query);
            if($result){
                echo "Merci, vous avez reussi!";
            }else{
                echo "oops! vous avez un error ";
            }
        
            }
            

    }
?>

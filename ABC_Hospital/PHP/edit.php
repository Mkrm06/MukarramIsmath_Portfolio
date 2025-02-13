<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.20.10/dist/css/uikit.min.css" />

</head>
<body>

<?php
        $pid = $_GET['id'];

        include "connection.php";

        $sql = "SELECT * FROM patients WHERE id=$pid";
        $result = mysqli_query($conn, $sql);
        
        if(mysqli_num_rows($result)>0){
            while($row = mysqli_fetch_assoc($result)){
                $name = $row["name"];
                $add = $row["address"];
                $disease = $row ["disease"];
                $gender = $row ["gender"];
                $contact = $row ["contact"];
            }
        }
    ?>

<form method="POST">
    <label>patients ID</label>
    <input class="uk-input uk-form-width-large" type="text" name="txt_id" value="<?php echo $pid?>"><br><br>

    <label>patients name</label>
    <input class="uk-input uk-form-width-large" type="text" name="txt_name" value="<?php echo $name?>"><br><br>

    <label>address</label>
    <input class="uk-input uk-form-width-large" type="text" name="txt_add" value="<?php echo $add?>"><br><br>

    <label>disease</label>
    <input class="uk-input uk-form-width-large" type="text" name="txt_disease" value="<?php echo $disease?>"><br><br>

    
    <label>gender</label>
    <input class="uk-input uk-form-width-large" type="text" name="txt_gender" value="<?php echo $gender?>"><br><br>

    <label>contact</label>
    <input class="uk-input uk-form-width-large" type="text" name="txt_contact" value="<?php echo $contact?>"><br><br>
      
    <input class="uk-button uk-button-secondary" type="submit" name="btn_submit">
</form>


</body>
</html>
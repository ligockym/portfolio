<?php





function insert_project() use($conn) {

    try {
        $conn = db_connect();

        $sql = "INSERT INTO MyGuests (firstname, lastname, email)
  VALUES ('John', 'Doe', 'john@example.com')";
        // use exec() because no results are returned
        $conn->exec($sql);
        echo "New record created successfully";
    } catch (PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }

    $conn = null;

}
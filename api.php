<?php
error_reporting(0);

$host = "localhost";
$user = "root";
$pass = "root";
$db = "api";

$koneksi = mysqli_connect($host, $user, $pass, $db);

$op = $_GET['op'];
switch($op){
    case '':normal();break;
    default:normal();break;
    case 'create' :create();break;
    case 'detail' :detail();break;
    case 'update' :update();break;
    case 'delete' :delete();break;
}

function normal(){
    global $koneksi;
    $sql1 = "select * from item order by id desc";
    $q1 = mysqli_query($koneksi, $sql1);
    while($r1 = mysqli_fetch_array($q1)) {
        $hasil[] = array(
            'id' => $r1['id'],
            'name' => $r1['name'],
            'price' => $r1['price'],
            'input_date' => $r1['input_date'],
            'image' => $r1['image'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function create() {
    global $koneksi;
    $name = $_POST['name'];
    $price = $_POST['price'];
    $hasil = "Gagal dimasukkan data";
    if($name and $price) {
        $sql1 = "insert into item(name,price) values ('$name','$price')";
        $q1 = mysqli_query($koneksi,$sql1);
        if($q1){
            $hasil = "Berhasil menambahkan data";
        }
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function detail() {
    global $koneksi;
    $id = $_GET['id'];
    $sql1 = "select * from item where id = '$id'";
    $q1 = mysqli_query($koneksi,$sql1);
    while($r1 = mysqli_fetch_array($q1)) {
        $hasil[] = array(
            'id' => $r1['id'],
            'name' => $r1['name'],
            'price' => $r1['price'],
            'input_date' => $r1['input_date'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function update() {
    global $koneksi;
    $id = $_GET['id'];
    $name = $_POST['name'];
    $price = $_POST['price'];
    if($name) {
        $set[] = "name='$name'";
    }
    if($price) {
        $set[] = "price='$price'";
    }
    $hasil = "Gagal melakukan update data";
    if($name or $price) {
        $sql1 = "update item set ".implode(",",$set).",input_date=now() where id = '$id'";
        $q1 = mysqli_query($koneksi,$sql1);
        if($q1){
            $hasil = "Data berhasil diupdate";
        }
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function delete() {
    global $koneksi;
    $id = $_GET['id'];
    $sql1 = "delete from item where id = '$id'";
    $q1 = mysqli_query($koneksi,$sql1);
    if($q1) {
        $hasil = "Berhasil menghapus data";
    }
    else {
        $hasil = "Gagal menghapus data";
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}
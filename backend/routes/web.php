<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $filePath = public_path('pages/index.html');
    if (file_exists($filePath)) {
        return response()->file($filePath);
    }
    return view('welcome');
});


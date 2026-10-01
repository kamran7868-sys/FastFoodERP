<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $filePath = public_path('pages/index.html');
    if (file_exists($filePath)) {
        return response()->file($filePath);
    }
    return view('welcome');
});

// Fallback / dynamic routing for all HTML pages
Route::get('/{page}', function ($page) {
    if (!str_ends_with($page, '.html')) {
        $pageWithExt = $page . '.html';
    } else {
        $pageWithExt = $page;
    }

    // Check in public/pages/
    $pagePath = public_path("pages/{$pageWithExt}");
    if (file_exists($pagePath)) {
        return response()->file($pagePath);
    }

    // Check in public/
    $rootPath = public_path($pageWithExt);
    if (file_exists($rootPath)) {
        return response()->file($rootPath);
    }

    abort(404);
})->where('page', '.*');



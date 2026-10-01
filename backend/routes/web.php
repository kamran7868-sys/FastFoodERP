<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $filePath = public_path('pages/index.html');
    if (file_exists($filePath)) {
        return response()->file($filePath);
    }
    return view('welcome');
});

// Backend API endpoints for authentication
Route::post('/api/login', function (\Illuminate\Http\Request $request) {
    $username = trim($request->input('username', ''));
    $password = trim($request->input('password', ''));

    $users = [
        [
            'id' => 1,
            'name' => 'Aamir Khan',
            'username' => 'Aamir Khan',
            'handle' => 'aamir',
            'password' => '12345678',
            'role' => 'Owner',
            'initials' => 'AK',
            'color' => '#EA580C',
            'permission' => 'Full access'
        ],
        [
            'id' => 2,
            'name' => 'Ali Hassan',
            'username' => 'Ali Hassan',
            'handle' => 'ali',
            'password' => '12345678',
            'role' => 'Manager',
            'initials' => 'AH',
            'color' => '#0891B2',
            'permission' => 'All except settings'
        ],
        [
            'id' => 3,
            'name' => 'Naveed Akhtar',
            'username' => 'Naveed Akhtar',
            'handle' => 'naveed',
            'password' => '12345678',
            'role' => 'Cashier',
            'initials' => 'NA',
            'color' => '#16A34A',
            'permission' => 'POS, orders, customers'
        ],
        [
            'id' => 4,
            'name' => 'Kamran Shah',
            'username' => 'Kamran Shah',
            'handle' => 'kamran',
            'password' => '12345678',
            'role' => 'Waiter',
            'initials' => 'KS',
            'color' => '#7C3AED',
            'permission' => 'POS, tables, orders'
        ],
        [
            'id' => 5,
            'name' => 'Rizwan Ahmed',
            'username' => 'Rizwan Ahmed',
            'handle' => 'rizwan',
            'password' => '12345678',
            'role' => 'Chef',
            'initials' => 'RA',
            'color' => '#D97706',
            'permission' => 'Menu, recipes, stock'
        ]
    ];

    $matched = null;
    foreach ($users as $u) {
        if (
            strcasecmp($u['name'], $username) === 0 ||
            strcasecmp($u['username'], $username) === 0 ||
            strcasecmp($u['handle'], $username) === 0 ||
            (strcasecmp($username, 'admin') === 0 && $u['role'] === 'Owner')
        ) {
            $matched = $u;
            break;
        }
    }

    if (!$matched || ($password !== '12345678' && $password !== '123')) {
        return response()->json([
            'success' => false,
            'message' => 'Invalid username or password. Password is 12345678'
        ], 401);
    }

    unset($matched['password']);

    return response()->json([
        'success' => true,
        'message' => 'Login successful',
        'user' => $matched
    ]);
});

Route::get('/api/users', function () {
    return response()->json([
        [ 'name' => 'Aamir Khan', 'username' => 'Aamir Khan', 'role' => 'Owner', 'password' => '12345678' ],
        [ 'name' => 'Ali Hassan', 'username' => 'Ali Hassan', 'role' => 'Manager', 'password' => '12345678' ],
        [ 'name' => 'Naveed Akhtar', 'username' => 'Naveed Akhtar', 'role' => 'Cashier', 'password' => '12345678' ],
        [ 'name' => 'Kamran Shah', 'username' => 'Kamran Shah', 'role' => 'Waiter', 'password' => '12345678' ],
        [ 'name' => 'Rizwan Ahmed', 'username' => 'Rizwan Ahmed', 'role' => 'Chef', 'password' => '12345678' ],
    ]);
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



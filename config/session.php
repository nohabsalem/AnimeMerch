<?php

use Illuminate\Support\Str;

return [

    /*
    |--------------------------------------------------------------------------
    | Pilote de session par défaut
    |--------------------------------------------------------------------------
    |
    | Cette option détermine le pilote de session par défaut utilisé pour
    | les requêtes entrantes. Laravel supporte plusieurs options de stockage
    | pour persister les données de session. Le stockage en base de données
    | est un excellent choix par défaut.
    |
    | Supportés : "file", "cookie", "database", "apc",
    |             "memcached", "redis", "dynamodb", "array"
    |
    */

    'driver' => env('SESSION_DRIVER', 'database'),

    /*
    |--------------------------------------------------------------------------
    | Durée de vie de la session
    |--------------------------------------------------------------------------
    |
    | Ici, vous pouvez spécifier le nombre de minutes pendant lesquelles la session
    | peut rester inactive avant d'expirer. Si vous souhaitez qu'elle expire
    | immédiatement à la fermeture du navigateur, vous pouvez le définir via
    | l'option expire_on_close.
    |
    */

    'lifetime' => (int) env('SESSION_LIFETIME', 120),

    'expire_on_close' => env('SESSION_EXPIRE_ON_CLOSE', false),

    /*
    |--------------------------------------------------------------------------
    | Chiffrement des sessions
    |--------------------------------------------------------------------------
    |
    | Cette option vous permet de spécifier facilement que toutes vos données de session
    | doivent être chiffrées avant d'être stockées. Tout le chiffrement est fait
    | automatiquement par Laravel et vous pouvez utiliser la session normalement.
    |
    */

    'encrypt' => env('SESSION_ENCRYPT', false),

    /*
    |--------------------------------------------------------------------------
    | Emplacement des fichiers de session
    |--------------------------------------------------------------------------
    |
    | Lorsque vous utilisez le pilote de session "file", les fichiers de session sont
    | placés sur le disque. L'emplacement par défaut est défini ici,
    | mais vous êtes libre d'en définir un autre.
    |
    */

    'files' => storage_path('framework/sessions'),

    /*
    |--------------------------------------------------------------------------
    | Connexion base de données pour les sessions
    |--------------------------------------------------------------------------
    |
    | Lorsque vous utilisez les pilotes "database" ou "redis", vous pouvez spécifier
    | une connexion devant être utilisée pour gérer les sessions. Cette connexion
    | doit correspondre à une de vos configurations de base de données.
    |
    */

    'connection' => env('SESSION_CONNECTION'),

    /*
    |--------------------------------------------------------------------------
    | Table des sessions en base de données
    |--------------------------------------------------------------------------
    |
    | Lorsque vous utilisez le pilote "database", vous pouvez spécifier la table
    | à utiliser pour stocker les sessions. Un choix par défaut est défini,
    | mais vous pouvez librement le modifier.
    |
    */

    'table' => env('SESSION_TABLE', 'sessions'),

    /*
    |--------------------------------------------------------------------------
    | Store de cache pour les sessions
    |--------------------------------------------------------------------------
    |
    | Lorsque vous utilisez un des backends de session liés au cache, vous pouvez
    | définir le store de cache qui sera utilisé pour stocker les données
    | entre les requêtes. Ceci doit correspondre à un store cache défini.
    |
    | Impacte : "apc", "dynamodb", "memcached", "redis"
    |
    */

    'store' => env('SESSION_STORE'),

    /*
    |--------------------------------------------------------------------------
    | Lotterie pour le nettoyage des sessions
    |--------------------------------------------------------------------------
    |
    | Certains pilotes de session doivent nettoyer manuellement leur stockage
    | pour éliminer les anciennes sessions. Voici les chances que ce nettoyage
    | ait lieu sur une requête donnée. Par défaut, c'est 2 chances sur 100.
    |
    */

    'lottery' => [2, 100],

    /*
    |--------------------------------------------------------------------------
    | Nom du cookie de session
    |--------------------------------------------------------------------------
    |
    | Ici, vous pouvez modifier le nom du cookie de session créé par le framework.
    | En règle générale, il n'est pas nécessaire de changer cette valeur
    | car cela n'améliore pas la sécurité de manière significative.
    |
    */

    'cookie' => env(
        'SESSION_COOKIE',
        Str::slug(env('APP_NAME', 'laravel'), '_') . '_session'
    ),

    /*
    |--------------------------------------------------------------------------
    | Chemin du cookie de session
    |--------------------------------------------------------------------------
    |
    | Le chemin du cookie de session détermine le chemin pour lequel le cookie sera
    | considéré comme disponible. En général, il s'agit de la racine de votre appli,
    | mais vous pouvez le modifier si besoin.
    |
    */

    'path' => env('SESSION_PATH', '/'),

    /*
    |--------------------------------------------------------------------------
    | Domaine du cookie de session
    |--------------------------------------------------------------------------
    |
    | Cette valeur détermine le domaine (et sous-domaines) pour lesquels le cookie
    | de session est valable. Par défaut, le cookie est disponible pour le domaine
    | racine et tous ses sous-domaines. En général, vous n'avez pas besoin de changer.
    |
    */

    'domain' => env('SESSION_DOMAIN'),

    /*
    |--------------------------------------------------------------------------
    | Cookies HTTPS uniquement
    |--------------------------------------------------------------------------
    |
    | En activant cette option à true, les cookies de session ne seront envoyés
    | par le navigateur que si la connexion utilise HTTPS. Cela empêche leur
    | envoi sur des connexions non sécurisées.
    |
    */

    'secure' => env('SESSION_SECURE_COOKIE'),

    /*
    |--------------------------------------------------------------------------
    | Accès HTTP uniquement
    |--------------------------------------------------------------------------
    |
    | En activant cette option à true, le cookie de session ne sera pas accessible
    | via JavaScript et ne sera disponible que via le protocole HTTP.
    | Il est conseillé de garder cette option activée pour des raisons de sécurité.
    |
    */

    'http_only' => env('SESSION_HTTP_ONLY', true),

    /*
    |--------------------------------------------------------------------------
    | Cookies Same-Site
    |--------------------------------------------------------------------------
    |
    | Cette option détermine le comportement des cookies lors de requêtes
    | inter-sites, et permet de limiter les attaques CSRF. Par défaut, c’est "lax",
    | autorisant les requêtes inter-sites sécurisées.
    |
    | Supportés : "lax", "strict", "none", null
    |
    */

    'same_site' => env('SESSION_SAME_SITE', 'lax'),

    /*
    |--------------------------------------------------------------------------
    | Cookies partitionnés
    |--------------------------------------------------------------------------
    |
    | En activant cette option, le cookie sera lié au site de premier niveau dans
    | un contexte cross-site. Les cookies partitionnés sont acceptés par les
    | navigateurs quand ils sont marqués "secure" et avec Same-Site à "none".
    |
    */

    'partitioned' => env('SESSION_PARTITIONED_COOKIE', false),

];

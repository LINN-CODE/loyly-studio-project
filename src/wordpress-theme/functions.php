<?php
/**
 * Löyly Studio Theme Functions
 *
 * @package Loyly_Studio
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Theme Setup
 */
function loyly_studio_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'loyly-studio'),
    ));

    // Switch default core markup to output valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Add theme support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ));
}
add_action('after_setup_theme', 'loyly_studio_setup');

/**
 * Enqueue scripts and styles
 */
function loyly_studio_scripts() {
    // Enqueue Google Fonts - Quicksand
    wp_enqueue_style(
        'loyly-fonts',
        'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap',
        array(),
        null
    );

    // Enqueue main stylesheet (globals.css)
    wp_enqueue_style(
        'loyly-main-styles',
        get_template_directory_uri() . '/styles/globals.css',
        array(),
        filemtime(get_template_directory() . '/styles/globals.css')
    );

    // Enqueue WordPress default style.css (required for theme detection)
    wp_enqueue_style(
        'loyly-style',
        get_stylesheet_uri(),
        array('loyly-main-styles'),
        filemtime(get_template_directory() . '/style.css')
    );

    // Import Maps for ES modules
    wp_add_inline_script(
        'loyly-importmap',
        '
        {
            "imports": {
                "react": "https://esm.sh/react@18.3.1",
                "react-dom": "https://esm.sh/react-dom@18.3.1",
                "react-dom/client": "https://esm.sh/react-dom@18.3.1/client",
                "motion/react": "https://esm.sh/motion@11.11.17/react",
                "lucide-react": "https://esm.sh/lucide-react@0.454.0",
                "wouter": "https://esm.sh/wouter@3.3.5",
                "react-slick": "https://esm.sh/react-slick@0.30.2",
                "slick-carousel/slick/slick.css": "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
                "slick-carousel/slick/slick-theme.css": "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
            }
        }
        ',
        'before'
    );
    wp_script_add_data('loyly-importmap', 'type', 'importmap');
    wp_enqueue_script('loyly-importmap', '', array(), null, false);

    // Enqueue React Slick CSS
    wp_enqueue_style(
        'slick-carousel',
        'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
        array(),
        '1.8.1'
    );
    wp_enqueue_style(
        'slick-carousel-theme',
        'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css',
        array('slick-carousel'),
        '1.8.1'
    );

    // Enqueue main React app
    wp_enqueue_script(
        'loyly-app',
        get_template_directory_uri() . '/App.js',
        array(),
        filemtime(get_template_directory() . '/App.js'),
        true
    );
    wp_script_add_data('loyly-app', 'type', 'module');
}
add_action('wp_enqueue_scripts', 'loyly_studio_scripts');

/**
 * Remove admin bar margin
 */
function loyly_remove_admin_bar_margin() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}
add_action('get_header', 'loyly_remove_admin_bar_margin');

/**
 * Custom template tags for this theme
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Customizer additions
 */
require get_template_directory() . '/inc/customizer.php';

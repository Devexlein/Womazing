<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'womazing' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'IF{XwP[~q#pYp)5;XGaw;:c~[{w&v@V?QP&(;[JRgSCJrM|i(xzG1tf&VUQ17bIQ' );
define( 'SECURE_AUTH_KEY',  ',ZeTqn%~c43NaiqAkY1Ccb nIcig`f+}lQ/@FQOkW)wObR>Ln84C(8t]iPCu|7h&' );
define( 'LOGGED_IN_KEY',    '[8Vqfk($`H1feYD4f%AD:+G2{p4QPYLUa9iYfVABDeX&jOm#fMY)E_dk^(t}1a!C' );
define( 'NONCE_KEY',        '/+9J2},V7n6~wMZ3K<Ew}) >`)1DQ8jZ)@pfU2W))~|A;bqTAS!T|1=urI1R}i:J' );
define( 'AUTH_SALT',        '.0H%<[8u++[[:U2xcQpYkr[/H}7QbRMH=UZweV`rN/,DKdr<GTi~:mo`V@s5.kpW' );
define( 'SECURE_AUTH_SALT', 'o*l26Bs5.c+b<]23dqE;;2Y%2 UtStqC!-.&slrb(HuB;JD.w?.0=`SR(T!3F^6,' );
define( 'LOGGED_IN_SALT',   '8?gKK-mZoPT2`>I;ZgC(=Xz2P0WmK,qEmg gk$&Q5W MUbm}T&9GhKFUG/0K$0+3' );
define( 'NONCE_SALT',       'xz/[VS~_0G}]mbHzpFv%q+<hZ>U(q*D4PKi`FZL2T{*axh47.]Ol)*Zl-oV)JdE#' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

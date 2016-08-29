<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */

function omega_f1_alpha_preprocess_hook(&$vars) {
  $menu_object = menu_get_object();
  if (isset($menu_object->type) && $vars['region'] == 'content') {
    $vars['theme_hook_suggestions'][] = 'region__content__'.$menu_object->type;
    $vars['attributes_array']['class'][] = 'region-content-'.$menu_object->type;
  }
}
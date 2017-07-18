<?php
/**
 * @file
 * automobile_maintenance_log.features.inc
 */

/**
 * Implements hook_node_info().
 */
function automobile_maintenance_log_node_info() {
  $items = array(
    'automobile_profile' => array(
      'name' => t('Automobile Profile'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}

/**
 * Implements hook_paragraphs_info().
 */
function automobile_maintenance_log_paragraphs_info() {
  $items = array(
    'car_maintenance_record' => array(
      'name' => 'Car Maintenance Record',
      'bundle' => 'car_maintenance_record',
      'locked' => '1',
    ),
    'part_and_cost' => array(
      'name' => 'Part and Cost',
      'bundle' => 'part_and_cost',
      'locked' => '1',
    ),
  );
  return $items;
}

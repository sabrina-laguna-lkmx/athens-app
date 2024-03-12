import type { Schema, Attribute } from '@strapi/strapi';

export interface DataAmericanOrganic extends Schema.Component {
  collectionName: 'components_data_american_organics';
  info: {
    displayName: 'american_organic';
  };
  attributes: {};
}

export interface DataApplyFor extends Schema.Component {
  collectionName: 'components_data_apply_fors';
  info: {
    displayName: 'apply_for';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    icon: Attribute.Media;
    label: Attribute.String;
  };
}

export interface DataCareers extends Schema.Component {
  collectionName: 'components_data_careers';
  info: {
    displayName: 'Careers';
  };
  attributes: {};
}

export interface DataCityFaqs extends Schema.Component {
  collectionName: 'components_data_city_faqs';
  info: {
    displayName: 'City FAQS';
  };
  attributes: {
    link: Attribute.Component<'data.simple-link', true>;
  };
}

export interface DataCityServiceDetails extends Schema.Component {
  collectionName: 'components_data_city_service_details';
  info: {
    displayName: 'City Service Details';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
    hours_of_operation: Attribute.RichText & Attribute.Required;
    holiday_schedule: Attribute.RichText & Attribute.Required;
    special_announcement: Attribute.RichText;
    special_announcement_information: Attribute.RichText;
    special_announcement_video_youtube_url: Attribute.String;
    collection_time: Attribute.RichText;
  };
}

export interface DataCompanyMilestones extends Schema.Component {
  collectionName: 'components_data_company_milestones';
  info: {
    displayName: 'Company Milestones';
  };
  attributes: {
    title: Attribute.String;
    year: Attribute.String;
    image: Attribute.Media;
  };
}

export interface DataComplexTextSection extends Schema.Component {
  collectionName: 'components_data_complex_text_sections';
  info: {
    displayName: 'Complex text section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    items_list_title: Attribute.String;
    items_list: Attribute.Component<'data.list-string', true>;
    items_list_image: Attribute.Media;
    video: Attribute.Media;
  };
}

export interface DataCompostGivewaysImage extends Schema.Component {
  collectionName: 'components_data_compost_giveways_images';
  info: {
    displayName: 'Compost Giveways Image';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface DataContainerItem extends Schema.Component {
  collectionName: 'components_data_container_items';
  info: {
    displayName: 'Container Item';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    bin_type: Attribute.Relation<
      'data.container-item',
      'oneToOne',
      'api::bin-type-name.bin-type-name'
    >;
    bin_type_image: Attribute.Relation<
      'data.container-item',
      'oneToOne',
      'api::image.image'
    >;
    uses: Attribute.Relation<
      'data.container-item',
      'oneToMany',
      'api::container-use.container-use'
    >;
    sizes: Attribute.Relation<
      'data.container-item',
      'oneToMany',
      'api::container-size.container-size'
    >;
    material_types: Attribute.Relation<
      'data.container-item',
      'oneToMany',
      'api::container-material-type.container-material-type'
    >;
  };
}

export interface DataContainerOrganics extends Schema.Component {
  collectionName: 'components_data_container_organics';
  info: {
    displayName: 'Container Organics';
  };
  attributes: {
    material_list: Attribute.Component<'data.material-list'>;
  };
}

export interface DataContainer extends Schema.Component {
  collectionName: 'components_data_containers';
  info: {
    displayName: 'container';
    icon: 'store';
    description: '';
  };
  attributes: {
    container_key: Attribute.String;
    bin_type: Attribute.Relation<
      'data.container',
      'oneToOne',
      'api::bin-type-name.bin-type-name'
    >;
    bin_type_image: Attribute.Relation<
      'data.container',
      'oneToOne',
      'api::image.image'
    >;
    container_uses: Attribute.Relation<
      'data.container',
      'oneToMany',
      'api::container-use.container-use'
    >;
    container_sizes: Attribute.Relation<
      'data.container',
      'oneToMany',
      'api::container-size.container-size'
    >;
    material_list: Attribute.Component<'data.material-list', true>;
  };
}

export interface DataContractsList extends Schema.Component {
  collectionName: 'components_data_contracts_lists';
  info: {
    displayName: 'contracts_list';
  };
  attributes: {
    street_sweeping_contracts: Attribute.Component<
      'data.street-sweeping-contracts',
      true
    >;
  };
}

export interface DataCounty extends Schema.Component {
  collectionName: 'components_data_counties';
  info: {
    displayName: 'County';
  };
  attributes: {
    hazardous_waste_phone_number: Attribute.Component<
      'data.phone-number',
      true
    >;
  };
}

export interface DataCustomerServiceCentersLocations extends Schema.Component {
  collectionName: 'components_data_customer_service_centers_locations';
  info: {
    displayName: 'Customer Service Centers Locations';
  };
  attributes: {};
}

export interface DataDownladableContentList extends Schema.Component {
  collectionName: 'components_data_downladable_content_lists';
  info: {
    displayName: 'Downladable-content-list';
  };
  attributes: {
    title: Attribute.String;
    file_downloads: Attribute.Component<'data.no-icon-simple-link', true>;
  };
}

export interface DataDownloadableResources extends Schema.Component {
  collectionName: 'components_data_downloadable_resources';
  info: {
    displayName: 'Downloadable Resources';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    subtitle: Attribute.Text;
    resources: Attribute.Component<'data.simple-link', true>;
  };
}

export interface DataEarthCommitmentItem extends Schema.Component {
  collectionName: 'components_data_earth_commitment_items';
  info: {
    displayName: 'Earth Commitment Item';
    icon: 'seed';
  };
  attributes: {
    icon: Attribute.Relation<
      'data.earth-commitment-item',
      'oneToOne',
      'api::icon.icon'
    >;
    description: Attribute.Text;
  };
}

export interface DataEventDatetimeRange extends Schema.Component {
  collectionName: 'components_data_event_datetime_ranges';
  info: {
    displayName: 'Event Datetime Range';
    icon: 'bell';
  };
  attributes: {
    date: Attribute.Date & Attribute.Required;
    start_hour: Attribute.Time;
    end_hour: Attribute.Time;
  };
}

export interface DataEventTypeItem extends Schema.Component {
  collectionName: 'components_data_event_type_items';
  info: {
    displayName: 'Event Type Item';
    icon: 'stack';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface DataEvent extends Schema.Component {
  collectionName: 'components_data_events';
  info: {
    displayName: 'Event';
    icon: 'bell';
    description: '';
  };
  attributes: {
    event_name: Attribute.String & Attribute.Required;
    venue_name: Attribute.String;
    event_image: Attribute.Media & Attribute.Required;
    address: Attribute.Text & Attribute.Required;
    address_google_maps_url: Attribute.String & Attribute.Required;
    event_content: Attribute.RichText & Attribute.Required;
    add_to_google_calendar: Attribute.Component<'data.simple-link'> &
      Attribute.Required;
    add_to_icalendar: Attribute.Component<'data.simple-link'> &
      Attribute.Required;
    start_date: Attribute.Component<'data.event-datetime-range'> &
      Attribute.Required;
    end_date: Attribute.Component<'data.event-datetime-range'>;
  };
}

export interface DataExamplesList extends Schema.Component {
  collectionName: 'components_data_examples_lists';
  info: {
    displayName: 'Examples List';
    icon: 'bulletList';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface DataExternalResources extends Schema.Component {
  collectionName: 'components_data_external_resources';
  info: {
    displayName: 'External Resources';
  };
  attributes: {
    image: Attribute.Media;
    resource_link: Attribute.Component<'data.simple-link'> & Attribute.Required;
    description: Attribute.Text;
  };
}

export interface DataFaqCalmet extends Schema.Component {
  collectionName: 'components_data_faq_calmets';
  info: {
    displayName: 'FAQ Calmet';
  };
  attributes: {
    faq_items: Attribute.Component<'data.faq-item', true>;
    faq_title: Attribute.String;
  };
}

export interface DataFaqItem extends Schema.Component {
  collectionName: 'components_data_faq_items';
  info: {
    displayName: 'FAQ Item';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.RichText;
  };
}

export interface DataFaqsResources extends Schema.Component {
  collectionName: 'components_data_faqs_resources';
  info: {
    displayName: 'FAQS Resources';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    downloadable_resources: Attribute.Component<'data.file-download', true>;
  };
}

export interface DataFileDownload extends Schema.Component {
  collectionName: 'components_data_file_downloads';
  info: {
    displayName: 'File Download';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    language: Attribute.Enumeration<
      ['English', 'Spanish', 'Russian', 'Armenian']
    >;
    dimensions: Attribute.String;
    orientation: Attribute.Enumeration<['Horizontal', 'Vertical']>;
    resource_link: Attribute.Component<'data.simple-link'>;
  };
}

export interface DataFoodDonationCityContactItem extends Schema.Component {
  collectionName: 'components_data_food_donation_city_contact_items';
  info: {
    displayName: 'Food Donation City Contact Item';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    contact_name: Attribute.Text;
    website: Attribute.Component<'data.simple-link'>;
    description: Attribute.Text;
    address_google_maps_url: Attribute.Component<'data.simple-link'>;
    phone: Attribute.Component<'data.simple-link'>;
    email: Attribute.Component<'data.simple-link'>;
    address: Attribute.Text;
  };
}

export interface DataFoodDonationCityContacts extends Schema.Component {
  collectionName: 'components_data_food_donation_city_contacts';
  info: {
    displayName: 'Food Donation City Contacts';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    city_name: Attribute.Text & Attribute.Required;
    description: Attribute.RichText;
    food_donation_city_contact_item: Attribute.Component<
      'data.food-donation-city-contact-item',
      true
    >;
  };
}

export interface DataHeadquarterLocation extends Schema.Component {
  collectionName: 'components_data_headquarter_locations';
  info: {
    displayName: 'Headquarter Location';
  };
  attributes: {};
}

export interface DataHero extends Schema.Component {
  collectionName: 'components_data_heroes';
  info: {
    displayName: 'Hero';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    category: Attribute.String;
  };
}

export interface DataHolidaySchedule extends Schema.Component {
  collectionName: 'components_data_holiday_schedules';
  info: {
    displayName: 'Holiday Schedule';
  };
  attributes: {
    holidays_list: Attribute.Component<'data.holidays-list'>;
    delay_info: Attribute.String;
    delay_exceptions: Attribute.String;
  };
}

export interface DataHolidaysList extends Schema.Component {
  collectionName: 'components_data_holidays_lists';
  info: {
    displayName: 'Holidays List';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface DataHoursRange extends Schema.Component {
  collectionName: 'components_data_hours_ranges';
  info: {
    displayName: 'Hours Range';
  };
  attributes: {
    start_hour: Attribute.String;
    start_minute: Attribute.String;
    end_hour: Attribute.String;
    end_minute: Attribute.String;
  };
}

export interface DataIdealPropertyTypes extends Schema.Component {
  collectionName: 'components_data_ideal_property_types';
  info: {
    displayName: 'ideal_property_types';
  };
  attributes: {
    property_type: Attribute.String;
  };
}

export interface DataImage extends Schema.Component {
  collectionName: 'components_data_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface DataInfoBox extends Schema.Component {
  collectionName: 'components_data_info_boxes';
  info: {
    displayName: 'Info Box';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    location: Attribute.Text;
    location_maps_url: Attribute.Component<'data.simple-link'>;
    contact_phone: Attribute.Component<'data.simple-link'>;
    weekly_hours: Attribute.Component<'data.weekly-hours'>;
  };
}

export interface DataIssuesContact extends Schema.Component {
  collectionName: 'components_data_issues_contacts';
  info: {
    displayName: 'issues_contact';
  };
  attributes: {
    label: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface DataLandfill extends Schema.Component {
  collectionName: 'components_data_landfills';
  info: {
    displayName: 'Landfill';
    icon: 'cube';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    opened_year: Attribute.String;
    image: Attribute.Media;
    accepted_materials: Attribute.Component<'data.list-string', true>;
    equipment: Attribute.Component<'data.list-string', true>;
    address: Attribute.Text;
    phone: Attribute.Component<'data.simple-link'>;
    operating_hours: Attribute.Component<'data.weekly-hours'>;
    swis_number: Attribute.Text;
    size: Attribute.Text;
    employees: Attribute.Text;
  };
}

export interface DataLinkList extends Schema.Component {
  collectionName: 'components_data_link_lists';
  info: {
    displayName: 'Link List';
  };
  attributes: {
    link: Attribute.Component<'data.simple-link', true>;
  };
}

export interface DataListString extends Schema.Component {
  collectionName: 'components_data_list_strings';
  info: {
    displayName: 'Short String Item';
    description: '';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface DataLocationItem extends Schema.Component {
  collectionName: 'components_data_location_items';
  info: {
    displayName: 'Location Item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    address: Attribute.String;
    address_google_url: Attribute.Component<'data.simple-link', true>;
    phone: Attribute.Component<'data.phone-number', true>;
    image: Attribute.Media;
    description: Attribute.Text;
    learn_more_link: Attribute.Component<'data.simple-link', true>;
  };
}

export interface DataLocationMapAchievements extends Schema.Component {
  collectionName: 'components_data_location_map_achievements';
  info: {
    displayName: 'Location Map Achievements';
    description: '';
  };
  attributes: {
    achievements_title: Attribute.String;
    achievements_subtitle: Attribute.String;
    achievements_text: Attribute.RichText;
    locations_map: Attribute.Component<'data.locations-map-illustration'>;
  };
}

export interface DataLocationsMapIllustration extends Schema.Component {
  collectionName: 'components_data_locations_map_illustrations';
  info: {
    displayName: 'Locations Map Illustration';
  };
  attributes: {
    location_name: Attribute.String;
    location_map_image: Attribute.Media;
  };
}

export interface DataMaterialList extends Schema.Component {
  collectionName: 'components_data_material_lists';
  info: {
    displayName: 'Material List';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    materials: Attribute.Relation<
      'data.material-list',
      'oneToMany',
      'api::material.material'
    >;
  };
}

export interface DataMedia extends Schema.Component {
  collectionName: 'components_data_media';
  info: {
    displayName: 'media';
  };
  attributes: {
    title: Attribute.String;
    youtube_url: Attribute.String;
  };
}

export interface DataMenuLink extends Schema.Component {
  collectionName: 'components_data_menu_links';
  info: {
    displayName: 'Menu Link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    description: Attribute.String;
    icon: Attribute.Relation<'data.menu-link', 'oneToOne', 'api::icon.icon'>;
  };
}

export interface DataMenuNavItem extends Schema.Component {
  collectionName: 'components_data_menu_nav_items';
  info: {
    displayName: 'Main Nav Items';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    menu_links: Attribute.Component<'data.menu-link', true>;
  };
}

export interface DataNewsCategory extends Schema.Component {
  collectionName: 'components_data_news_categories';
  info: {
    displayName: 'News Category';
    icon: 'stack';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface DataNewsPage extends Schema.Component {
  collectionName: 'components_data_news_pages';
  info: {
    displayName: 'News Page';
    icon: 'stack';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    excerpt: Attribute.RichText;
    featured_image: Attribute.Media;
    article_content: Attribute.RichText;
    categories: Attribute.Component<'data.news-category'>;
    publish_date: Attribute.Date;
    featured_image_alt: Attribute.String;
  };
}

export interface DataNoIconSimpleLink extends Schema.Component {
  collectionName: 'components_data_no_icon_simple_links';
  info: {
    displayName: 'No-icon-simple-link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    image: Attribute.Media;
  };
}

export interface DataOfferItem extends Schema.Component {
  collectionName: 'components_data_offer_items';
  info: {
    displayName: 'Offer Item';
    icon: 'cloud';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    learn_more_link: Attribute.Component<'data.simple-link'>;
  };
}

export interface DataOfficeHours extends Schema.Component {
  collectionName: 'components_data_office_hours';
  info: {
    displayName: 'Office Hours';
    description: '';
  };
  attributes: {
    days: Attribute.String;
    hours: Attribute.String;
  };
}

export interface DataOrganicRecyclingProcess extends Schema.Component {
  collectionName: 'components_data_organic_recycling_processes';
  info: {
    displayName: 'Process Section';
    description: '';
    icon: 'layout';
  };
  attributes: {
    process_steps: Attribute.Component<'data.process-step', true>;
    title: Attribute.String;
    additional_info: Attribute.RichText;
  };
}

export interface DataOrganicsWasteExample extends Schema.Component {
  collectionName: 'components_data_organics_waste_examples';
  info: {
    displayName: 'Organics waste example';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    icon: Attribute.Relation<
      'data.organics-waste-example',
      'oneToOne',
      'api::icon.icon'
    >;
    description: Attribute.Text;
    examples_list: Attribute.Component<'data.examples-list', true>;
  };
}

export interface DataPhoneNumber extends Schema.Component {
  collectionName: 'components_data_phone_numbers';
  info: {
    displayName: 'Phone Number';
  };
  attributes: {
    number: Attribute.String;
  };
}

export interface DataProcessSection extends Schema.Component {
  collectionName: 'components_data_process_sections';
  info: {
    displayName: 'Process Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    process_steps: Attribute.Component<'data.process-step', true>;
    additional_info: Attribute.RichText;
  };
}

export interface DataProcessStep extends Schema.Component {
  collectionName: 'components_data_process_steps';
  info: {
    displayName: 'Process Step';
    description: '';
  };
  attributes: {
    step_number: Attribute.Integer;
    title: Attribute.Text;
    image: Attribute.Media;
    description: Attribute.RichText;
  };
}

export interface DataRecyclingSignageResource extends Schema.Component {
  collectionName: 'components_data_recycling_signage_resources';
  info: {
    displayName: 'Recycling Signage Resource';
    icon: 'moon';
    description: '';
  };
  attributes: {
    icon: Attribute.Relation<
      'data.recycling-signage-resource',
      'oneToOne',
      'api::icon.icon'
    >;
    title: Attribute.Text & Attribute.Required;
    description: Attribute.RichText;
    image: Attribute.Media;
    resource: Attribute.Component<'data.file-download', true>;
  };
}

export interface DataReferenceQuoteItem extends Schema.Component {
  collectionName: 'components_data_reference_quote_items';
  info: {
    displayName: 'Reference Quote Item';
    icon: 'quote';
  };
  attributes: {
    title: Attribute.String;
    quote: Attribute.RichText;
    author: Attribute.Text;
    author_detail: Attribute.Text;
  };
}

export interface DataService extends Schema.Component {
  collectionName: 'components_data_services';
  info: {
    displayName: 'service';
    description: '';
  };
  attributes: {
    service_intro: Attribute.String;
    service_description: Attribute.RichText;
    service_image: Attribute.Media;
    service_title: Attribute.String;
  };
}

export interface DataSimpleLink extends Schema.Component {
  collectionName: 'components_data_simple_links';
  info: {
    displayName: 'Simple Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.Text & Attribute.Required;
    icon: Attribute.Relation<'data.simple-link', 'oneToOne', 'api::icon.icon'>;
  };
}

export interface DataSimpleList extends Schema.Component {
  collectionName: 'components_data_simple_lists';
  info: {
    displayName: 'Simple Service';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    service_name: Attribute.String;
    icon: Attribute.Relation<'data.simple-list', 'oneToOne', 'api::icon.icon'>;
  };
}

export interface DataSimpleNav extends Schema.Component {
  collectionName: 'components_data_simple_navs';
  info: {
    displayName: 'Simple Nav';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    simple_links: Attribute.Component<'data.simple-link', true>;
  };
}

export interface DataSimpleTextItem extends Schema.Component {
  collectionName: 'components_data_simple_text_items';
  info: {
    displayName: 'Simple Text Item';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface DataSimpleTextSection extends Schema.Component {
  collectionName: 'components_data_simple_text_sections';
  info: {
    displayName: 'Simple Text Section';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    content: Attribute.RichText;
    video: Attribute.Media;
    title_design: Attribute.Boolean;
    image: Attribute.Media;
    media_position: Attribute.Enumeration<['right', 'left', 'above', 'below']>;
  };
}

export interface DataSpecialWasteService extends Schema.Component {
  collectionName: 'components_data_special_waste_services';
  info: {
    displayName: 'special_waste_service';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    offers_list: Attribute.Component<'data.list-string', true>;
    icon: Attribute.Relation<
      'data.special-waste-service',
      'oneToOne',
      'api::icon.icon'
    >;
  };
}

export interface DataStatic extends Schema.Component {
  collectionName: 'components_data_statics';
  info: {
    displayName: 'Statistic';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    key: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface DataStreetSweepingContracts extends Schema.Component {
  collectionName: 'components_data_street_sweeping_contracts';
  info: {
    displayName: 'street_sweeping_contracts';
  };
  attributes: {
    city_contract_label: Attribute.String;
    city_contract_file_url: Attribute.String;
  };
}

export interface DataTermItem extends Schema.Component {
  collectionName: 'components_data_term_items';
  info: {
    displayName: 'Term Item';
    description: '';
  };
  attributes: {
    term: Attribute.Text;
    definition: Attribute.RichText;
  };
}

export interface DataTestimonial extends Schema.Component {
  collectionName: 'components_data_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    customer_full_name: Attribute.String & Attribute.Required;
    customer_title: Attribute.String & Attribute.Required;
    customer_company: Attribute.String;
    testimonial: Attribute.RichText & Attribute.Required;
  };
}

export interface DataTipItem extends Schema.Component {
  collectionName: 'components_data_tip_items';
  info: {
    displayName: 'Tip Item';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.Text;
    content: Attribute.RichText;
  };
}

export interface DataTipsSection extends Schema.Component {
  collectionName: 'components_data_tips_sections';
  info: {
    displayName: 'Tips Section';
    icon: 'book';
  };
  attributes: {
    title: Attribute.Text;
    image: Attribute.Media;
    description: Attribute.RichText;
    tip_item: Attribute.Component<'data.tip-item', true>;
  };
}

export interface DataTransferStation extends Schema.Component {
  collectionName: 'components_data_transfer_stations';
  info: {
    displayName: 'Transfer Station';
    icon: 'crop';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    map_url: Attribute.Text & Attribute.Required;
    address: Attribute.String;
    operating_hours: Attribute.Component<'data.weekly-hours'>;
    phone: Attribute.Component<'data.simple-link'>;
    employee: Attribute.Text;
  };
}

export interface DataWasteItem extends Schema.Component {
  collectionName: 'components_data_waste_items';
  info: {
    displayName: 'Waste Item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Relation<'data.waste-item', 'oneToOne', 'api::icon.icon'>;
  };
}

export interface DataWasteList extends Schema.Component {
  collectionName: 'components_data_waste_lists';
  info: {
    displayName: 'Waste List';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    waste_item: Attribute.Component<'data.waste-item', true>;
  };
}

export interface DataWeeklyHours extends Schema.Component {
  collectionName: 'components_data_weekly_hours';
  info: {
    displayName: 'Weekly Hours';
    description: '';
  };
  attributes: {
    hours: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'data.american-organic': DataAmericanOrganic;
      'data.apply-for': DataApplyFor;
      'data.careers': DataCareers;
      'data.city-faqs': DataCityFaqs;
      'data.city-service-details': DataCityServiceDetails;
      'data.company-milestones': DataCompanyMilestones;
      'data.complex-text-section': DataComplexTextSection;
      'data.compost-giveways-image': DataCompostGivewaysImage;
      'data.container-item': DataContainerItem;
      'data.container-organics': DataContainerOrganics;
      'data.container': DataContainer;
      'data.contracts-list': DataContractsList;
      'data.county': DataCounty;
      'data.customer-service-centers-locations': DataCustomerServiceCentersLocations;
      'data.downladable-content-list': DataDownladableContentList;
      'data.downloadable-resources': DataDownloadableResources;
      'data.earth-commitment-item': DataEarthCommitmentItem;
      'data.event-datetime-range': DataEventDatetimeRange;
      'data.event-type-item': DataEventTypeItem;
      'data.event': DataEvent;
      'data.examples-list': DataExamplesList;
      'data.external-resources': DataExternalResources;
      'data.faq-calmet': DataFaqCalmet;
      'data.faq-item': DataFaqItem;
      'data.faqs-resources': DataFaqsResources;
      'data.file-download': DataFileDownload;
      'data.food-donation-city-contact-item': DataFoodDonationCityContactItem;
      'data.food-donation-city-contacts': DataFoodDonationCityContacts;
      'data.headquarter-location': DataHeadquarterLocation;
      'data.hero': DataHero;
      'data.holiday-schedule': DataHolidaySchedule;
      'data.holidays-list': DataHolidaysList;
      'data.hours-range': DataHoursRange;
      'data.ideal-property-types': DataIdealPropertyTypes;
      'data.image': DataImage;
      'data.info-box': DataInfoBox;
      'data.issues-contact': DataIssuesContact;
      'data.landfill': DataLandfill;
      'data.link-list': DataLinkList;
      'data.list-string': DataListString;
      'data.location-item': DataLocationItem;
      'data.location-map-achievements': DataLocationMapAchievements;
      'data.locations-map-illustration': DataLocationsMapIllustration;
      'data.material-list': DataMaterialList;
      'data.media': DataMedia;
      'data.menu-link': DataMenuLink;
      'data.menu-nav-item': DataMenuNavItem;
      'data.news-category': DataNewsCategory;
      'data.news-page': DataNewsPage;
      'data.no-icon-simple-link': DataNoIconSimpleLink;
      'data.offer-item': DataOfferItem;
      'data.office-hours': DataOfficeHours;
      'data.organic-recycling-process': DataOrganicRecyclingProcess;
      'data.organics-waste-example': DataOrganicsWasteExample;
      'data.phone-number': DataPhoneNumber;
      'data.process-section': DataProcessSection;
      'data.process-step': DataProcessStep;
      'data.recycling-signage-resource': DataRecyclingSignageResource;
      'data.reference-quote-item': DataReferenceQuoteItem;
      'data.service': DataService;
      'data.simple-link': DataSimpleLink;
      'data.simple-list': DataSimpleList;
      'data.simple-nav': DataSimpleNav;
      'data.simple-text-item': DataSimpleTextItem;
      'data.simple-text-section': DataSimpleTextSection;
      'data.special-waste-service': DataSpecialWasteService;
      'data.static': DataStatic;
      'data.street-sweeping-contracts': DataStreetSweepingContracts;
      'data.term-item': DataTermItem;
      'data.testimonial': DataTestimonial;
      'data.tip-item': DataTipItem;
      'data.tips-section': DataTipsSection;
      'data.transfer-station': DataTransferStation;
      'data.waste-item': DataWasteItem;
      'data.waste-list': DataWasteList;
      'data.weekly-hours': DataWeeklyHours;
    }
  }
}

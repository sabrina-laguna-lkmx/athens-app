// import { ContactInfoModel } from "@/components/contact-info";
// import { EnumValues } from "zod";

export type Icon = {
  data: {
    id: number;
    attributes: {
      key: string;
      icon: {
        data: {
          id: number;
          attributes: {
            name: string;
            url: string;
            width: number;
            height: number;
          };
        };
      };
    };
  };
};
export type HeroModel = {
  id: number;
  title: string;
  category: string;
};

export type NewsItems = {
  id: number;
  title: string;
  excerpt: string;
  article_content: string;
  categories: Categories;
  featured_image: ImageModel;
  featured_image_alt: string;
  publish_date: string;
};

export type Categories = {
  title: string;
};

export type ImageModel = {
  id: number;
  data: {
    id: number;
    attributes: {
      mime: string | undefined;
      fullUrl: string;
      name: string;
      url: string;
      width: number;
      height: number;
    };
  };
};

export type ImageEventModel = {
  id: number;
  data: [
    {
      id: number;
      attributes: {
        mime: string | undefined;
        fullUrl: string;
        name: string;
        url: string;
        width: number;
        height: number;
      };
    }
  ];
};

export type ContractorModel = {
  subtitle: string;
  intro: string;
  services: Services[];
  hero: HeroModel;
  picture: ImageModel;
  video: ImageModel;
  container: ContainerModel;
};

export type Services = {
  id: number;
  service_name: string;
  icon: Icon;
};

export type ContainerModel = {
  id: number;
  container_key: string;
  bin_type: BinType;
  bin_type_image: BinTypeImage;
  container_uses: ContainerUses[];
  container_sizes: ContainerSizes;
  material_list: MaterialList[];
};

export type BinType = {
  data: {
    id: number;
    attributes: {
      bin_type_name: string;
    };
  };
};

export type BinTypeImage = {
  data: {
    id: number;
    attributes: {
      image: {
        data: {
          id: number;
          attributes: {
            name: string;
            url: string;
            width: number;
            height: number;
          };
        };
      };
    };
  };
};

export type ContainerUses = {
  data: [
    {
      id: number;
      attributes: {
        container_use: string;
      };
    }
  ];
};

export type ContainerSizes = {
  data: ContainerSizesData[];
};

export type ContainerSizesData = {
  id: number;
  attributes: {
    bin_volume: string;
    bin_height: string;
    bin_width: string;
    bin_length: string;
  };
};

export type MaterialList = {
  id: number;
  materials: Materials[];
};

export type ContainerMaterials = {
  id: string;
  materials: Materials;
};

export type Materials = {
  data: [
    {
      id: number;
      attributes: {
        icon: IconModel;
        title: string;
        description: string;
      };
    }
  ];
};

export type MediaModel = {
  data: {
    id: number;
    attributes: {
      url: string;
      width: number;
      height: number;
    };
  };
};

export type IconModel = {
  data: {
    id: number;
    attributes: {
      key: string;
      icon: MediaModel;
    };
  };
};

export type FAQModel = {
  id: number;
  question: string;
  answer: string;
};

export type SimpleLinkModel = {
  id: number;
  label: string;
  url: string;
  icon: IconModel;
};

export type DownloadableResource = {
  id: number;
  title: string;
  subtitle: string;
  resource_link: SimpleLinkModel[];
  image: ImageModel;
};

const orientations = ["Horizontal", "Vertical"] as const;
type FileDownloadOrientation = (typeof orientations)[number];

export type FileDownloadModel = {
  id: number;
  title: string;
  language: string;
  dimensions: string;
  orientation: FileDownloadOrientation;
  resource_link: SimpleLinkModel;
  image: ImageModel;
};

export type CareerInfoCompany = {
  id: number;
  label: string;
  url: string;
  icon: ImageModel;
};

export type Contactreers = {
  id: number;
  label: string;
  url: string;
  icon: MediaModel;
};

export type CareersProps = {
  hero: HeroModel;
  title: string;
  image: ImageModel;
  all_positions_link: SimpleLinkModel;
  driver_applicants_link: SimpleLinkModel;
  internal_applicants_link: SimpleLinkModel;
  careers_email_address: string;
  careers_service_phone: string;
};

export type ServicesStreetSweeping = {
  id: number;
  service_name: string;
  icon: Icon;
};

export type IdealPropsStreetSweeping = {
  id: number;
  property_type: string;
};

export type LinkStreetSweeping = {
  id: number;
  city_contract_label: string;
  city_contract_file_url: string;
};

export type ContractsListStreetSweeping = {
  id: number;
  street_sweeping_contracts: LinkStreetSweeping[];
};

export type IdealPropertyTypeStreetSweeping = {
  id: number;
  property_type: string;
};

export type StreetSweepingContract = {
  id: number;
  city_contract_label: string;
  city_contract_file_url: string;
};

export type ContractsList = {
  id: number;
  street_sweeping_contracts: StreetSweepingContract[];
};

export type SpecialWasteServiceOffer = {
  id: number;
  text: string;
};

export type DailyHours = {
  id: number;
  start_hour: number | null;
  start_minute: number | null;
  end_hour: number | null;
  end_minute: number | null;
};

export type OfficeDays = {
  id: number;
  monday_hours?: DailyHours | null;
  tuesday_hours?: DailyHours | null;
  wednesday_hours?: DailyHours | null;
  thursday_hours?: DailyHours | null;
  friday_hours?: DailyHours | null;
  saturday_hours?: DailyHours | null;
  sunday_hours?: DailyHours | null;
  [key: string]: DailyHours | number | null | undefined;
};

export type StreetSweepingProps = {
  attributes: {
    subtitle: string;
    intro: string;
    youtube: string;
    ideal_property_type: IdealPropertyTypeStreetSweeping[];
    services: ServicesStreetSweeping[];
    contracts_list: ContractsList[];
    image: ImageModel;
    hero: HeroModel;
    office_hours: WorkHours[];
  };
};

export type WorkHours = {
  id: number;
  days: string;
  hours: string;
};

export type SpecialWasteService = {
  id: number;
  title: string;
  description: string;
  icon: Icon;
  offers_list: SpecialWasteServiceOffer[];
};

export type SpecialWasteProps = {
  attributes: {
    subtitle: string;
    title: string;
    intro: string;
    hero: HeroModel;
    special_waste_services: SpecialWasteService[];
    contact_info: {
      // data: ContactInfoModel;
    };
  };
};

export type PrivacyPolicyModel = {
  context: string;
  hero: HeroModel;
};

export type AccessibilityModel = {
  content: string;
  hero: HeroModel;
};

export type RecyclingGuideModel = {
  hero: HeroModel;
  simple_text_section: SimpleTextSection;
};

export type ContactInfoLayout = {
  title: string;
  description: string;
  customer_service_phone: string;
  customer_service_url: string;
  location_url: string;
};

export type ItemFAQ = {
  id: number;
  question: string;
  answer: string;
};

export type TermFAQ = {
  id: number;
  term: string;
  definition: string;
};

export type InformationFAQ = {
  hero: HeroModel;
  subtitle: string;
  faq_item: ItemFAQ[];
  term_item: TermFAQ[];
};

export type OfficeTipsModel = {
  subtitle: string;
  intro: string;
  intro_media: ImageModel;
  hero: HeroModel;
  tips_section: TipsSection[];
};

export type HomeTipsModel = {
  subtitle: string;
  intro: string;
  intro_media: ImageModel;
  hero: HeroModel;
  tips_section: TipsSection[];
  reference_quotes: ReferenceQuoteItem[];
};

export type TipsSection = {
  id: number;
  title: string;
  description: string;
  image: ImageModel;
  tip_item: TipItem[];
};

export type TipItem = {
  id: number;
  title: string;
  content: string;
};

export type AthensWayInformation = {
  attributes: {
    title: string;
    subtitle: string;
    description: string;
    hero: HeroModel;
    description_image: ImageModel;
    company_milestones: AthensWayMilestones[];
  };
};

export type AthensWayMilestones = {
  id: number;
  title: string;
  year: string;
  image: ImageModel;
};

export type ReferenceQuoteItem = {
  title: string;
  quote: string;
  author: string;
  author_detail: string;
};

export type validationsForm = {
  accountOption: string;
  serviceOption: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  subject: string;
  message: string;
  accountNumber: string;
  helpOption: string;
  newAccount: string;
  open_market: boolean;
};

export type validationsPassword = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type validationAutopay = {
  conditions: Boolean;
};

export type validationAddPayment = {
  firstName: string;
  lastName: string;
  midInit: string;
  billingAddress1: string;
  billingAddress2: string;
  city: string;
  state: string;
  maskedValue: string;
  zipCode: number | string;
  accountType: string;
  creditCard: number | string | null;
  month: number | string | null;
  year: number | string | null;
  cvv: number | string | null;
  bankName: string;
  routingNumber: number;
  accountNumber: number;
};

export type OrganicPageModel = {
  attributes: {
    hero: HeroModel;
    process_title: string;
    process: ProcessSection;
    kitchen_pail_title: string;
    kitchen_pail_description: string;
    kitchen_pail_image: ImageModel;
    acceptable_waste: WasteModel;
    unacceptable_waste: WasteModel;
    faqs: FAQModel[];
    youtube_url: string;
    containers_audit: SimpleTextSection;
    clean_kitchen_pail_tips: SimpleTextSection;
    resources: {
      title: string;
      subtitle: string;
      image: ImageModel;
      resources: SimpleLinkModel[];
    };
  };
};

export type ProcessSection = {
  id: number;
  title: string;
  additional_info: string;
  process_steps: ProcessSteps[];
};

export type ProcessSteps = {
  id: number;
  step_number: number;
  title: string;
  description: string;
  image: ImageModel;
};

export type WasteModel = {
  id: number;
  title: string;
  description: string;
  icon: Icon;
  waste_item: WasteItem[];
};

export type WasteItem = {
  id: number;
  title: string;
  description: string;
  icon: IconModel;
};

export type SimpleTextSection = {
  id: number;
  title: string;
  content: string;
  video: ImageModel;
  title_design: boolean;
  image: ImageModel;
  // media_position: EnumValues;
};

export type PhoneModel = {
  id: number;
  number: string;
};

export type modelImage = {
  id: number;
  attributes: {
    fullUrl: string;
    name: string;
    url: string;
    width: number;
    height: number;
  };
};

export type URLModel = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export type OurLocation = {
  id: number;
  title: string;
  address: string;
  description: string;
  address_google_url: SimpleLinkModel[];
  phone: PhoneModel[];
  image: ImageModel;
  icon: URLModel;
  learn_more_link: SimpleLinkModel[];
};

export type OurLocationInformation = {
  hero: HeroModel;
  corporate_offices_title: string;
  customer_service_centers_title: string;
  facilities_title: string;
  headquarter_location: OurLocation[];
  customer_service_centers_locations: OurLocation[];
  facility_locations: OurLocation[];
};

export type FoodDonationModel = {
  hero: HeroModel;
  why_donate: SimpleTextSection;
  donation_benefits: SimpleTextSection;
  donation_protection: SimpleTextSection;
  what_donate: SimpleTextSection;
  date_labels: SimpleTextSection;
  how_donate: ProcessSection;
  food_recovery_partner: SimpleTextSection;
  select_partner_title: string;
  donation_city_contacts: FoodDonationCityContactsModel[];
  waste_prevention: SimpleTextSection;
  reduction_recovery: SimpleTextSection;
  references: SimpleTextSection;
};

export type FoodDonationCityContactsModel = {
  id: number;
  city_name: string;
  description: string;
  food_donation_city_contact_item: FoodDonationCityContactItemModel[];
};

export type FoodDonationCityContactItemModel = {
  id: number;
  contact_name: string;
  description: string;
  address: string;
  address_google_maps_url: SimpleLinkModel;
  phone: SimpleLinkModel;
  email: SimpleLinkModel;
  additional_info: string;
  website: SimpleLinkModel;
};

export type UrlModel = {
  id: number;
  label: string;
  url: string;
  icon: IconModel;
};

export type RelatedNewsModel = {
  id: number;
  attributes: {
    news_items: NewsItems[];
  };
};

export type NewsPage = {
  id: number;
  title: string;
  excerpt: string;
  article_content: string;
  categories: Categories;
  featured_image: ImageModel;
  featured_image_alt: string;
  publish_date: string;
};

export type CustomerServiceFormInfo = {
  hero: HeroModel;
  cities: CustomerServiceBools;
};

export type CustomerServiceBools = {
  data: CityData[];
};

export type CityData = {
  id: number;
  attributes: CityAttributes;
};

export type CityAttributes = {
  name: string;
  logo: MediaModel;
  county: County;
  customer_service_line_telephone_number: string;
  city_faqs: SimpleLinkModel;
  collection_map_schedule_pdf_url: string;
  residential_services_available: boolean;
  residential_service_details: CityServicesDetails;
  business_services_available: boolean;
  business_service_details: CityServicesDetails;
  container_organics: ContainerMaterials;
  container_landfill: ContainerMaterials;
  container_recycling: ContainerMaterials;
  container_prohibited: ContainerMaterials;
  bulky_pick_up_available: boolean;
  bulky_items_examples: ContainerMaterials;
  street_sweeping_available: boolean;
  street_sweeping_map_url: string;
  holiday_tree_recycling_available: boolean;
  residential_recycling_guide: boolean;
  residential_stream_type: Stream;
  business_recycling_guide: boolean;
  business_stream_type: Stream;
  open_market: boolean;
  residential_customer_service_available: boolean;
  business_customer_service_available: boolean;
  front_load_3_yard_bin_available: boolean;
  compactors_lease_available: boolean;
  roll_off_available: boolean;
};

export type CityServicesDetails = {
  content: string;
  collection_time: string;
  hours_of_operation: string;
  holiday_schedule: string;
  special_announcement: string;
  special_announcement_information: string;
  special_announcement_video_youtube_url: string;
};

export type County = {
  hazardous_waste_phone_number: PhoneModel[];
};

export type MaterialReuseModel = {
  hero: HeroModel;
  intro: SimpleTextSection;
  repair: SimpleTextSection;
  repurpose_upcycle: SimpleTextSection;
  share_community: SimpleTextSection;
  donate: SimpleTextSection;
  buy_sell_secondhand: SimpleTextSection;
};

export type SimpleTextItem = {
  id: number;
  content: string;
};

export type ImageModelProps = {
  id: number;
  image: {
    data: {
      id: number;
      attributes: {
        name: string;
        url: string;
        width: number;
        height: number;
      };
    };
  };
};

export type ZeroWasteInfo = {
  hero: HeroModel;
  intro_subtitle: string;
  intro_message: string;
  what_is_zero_waste: ProcessSection;
  why_zero_waste: SimpleTextSection;
  how_reduce_waste: SimpleTextSection;
  reduce_waste_links: SimpleTextItem[];
  value_composting: SimpleTextSection;
  american_organics_about: SimpleTextSection;
  american_organics_accepted_waste: WasteModel;
  american_organics_prohibited_waste: WasteModel;
  did_you_know: SimpleTextSection;
  compost_giveways: string;
  compost_giveways_image: ImageModelProps[];
  at_home_composting_resources: string;
  at_home_composting_resources_image: SimpleTextItem[];
};

export type ContainerSizesModel = {
  hero: HeroModel;
  containers: ContainerItemModel[];
};

export type ContainerItemModel = {
  id: number;
  bin_type: BinType;
  bin_type_image: BinTypeImage;
  uses: ContainerUses;
  sizes: ContainerSize;
  material_types: ContainerMaterialTypes;
};

export type ContainerSize = {
  data: [
    {
      id: number;
      attributes: {
        bin_volume: string;
        bin_height: string;
        bin_width: string;
        bin_length: string;
      };
    }
  ];
};

export type ContainerMaterialTypes = {
  data: [
    {
      id: number;
      attributes: {
        material_type: string;
      };
    }
  ];
};

export type OutreachMaterialModel = {
  hero: HeroModel;
  what_goes_where: SimpleTextSection;
  reuse_repurpose_repair_donate: SimpleTextSection;
  athens_recycling_signage_title: SimpleTextSection;
  athens_recycling_signage_resource: RecyclingSignageResource[];
  hazardous_waste_cheat_sheets_title: string;
  hazardous_waste_cheat_sheets_description: string;
  hazardous_waste_cheat_sheets_image: ImageModel;
  hazardous_waste_cheat_sheets_resources: RecyclingSignageResource[];
  additional_tenant_signage_title: string;
  additional_tenant_signage_description: string;
  additional_tenant_signage_resources: RecyclingSignageResource[];
  zero_waste_school_program_language_title: string;
  zero_waste_school_program_signage_resource: RecyclingSignageResource[];
  measure_your_footprint_title: string;
  environmentally_preferable_purchasing_title: string;
  environmentally_preferable_purchasing_resources: ExternalResource[];
  climate_and_waste_calculators_title: string;
  climate_and_waste_calculators_description: string;
  climate_and_waste_calculators_resources: ExternalResource[];
  additional_online_resources_title: string;
  additional_online_resources_resources: ExternalResource[];
  local_environmental_resources: string;
};

export type RecyclingSignageResource = {
  id: number;
  icon: IconModel;
  title: string;
  description: string;
  image: ImageModel;
  resource: FileDownloadModel[];
};

export type ExternalResource = {
  id: number;
  image: ImageModel;
  resource_link: SimpleLinkModel;
  description: string;
};

export type DownloadableResourceLaws = {
  id: number;
  title: string;
  // language: EnumValues;
  dimensions: string;
  // orientation: EnumValues;
  resource_link: SimpleLinkModel;
  image: ImageModel;
};

export type LawSB1383Info = {
  hero: HeroModel;
  to_know_title: string;
  youtube_url: string;
  what_is: SimpleTextSection;
  apply_to: SimpleTextSection;
  business_impact_pt1: SimpleTextSection;
  business_impact_url: string;
  business_impact_pt2: SimpleTextSection;
  new_regulation: SimpleTextSection;
  why_compost: SimpleTextSection;
  best_practices: SimpleTextSection;
  downloadable_resources: FileDownloadModel[];
};

export type HeroModelCustomerServiceForm = {
  hero: HeroModel;
  id: number;
  title: string;
  category: string;
};

export type LawAb1826Model = {
  id: number;
  hero: HeroModel;
  commercial_organics_recycling: SimpleTextSection;
  organics_waste_examples: OrganicsWasteExample[];
  timeline: SimpleTextSection;
  american_organics_intro: SimpleTextSection;
  american_organics: SimpleTextSection;
  contact_boxes: ContactBoxesModel[];
  accepted_organics_waste: WasteListModel;
  unaccepted_organics_waste: WasteListModel;
  downloadable_resources: FileDownloadModel[];
};

export type OrganicsWasteExample = {
  id: number;
  title: string;
  icon: IconModel;
  image: ImageModel;
  description: string;
  examples_list: ListStringModel[];
};

export type ListStringModel = {
  id: number;
  text: string;
};

export type ListStringItemModel = {
  id: number;
  text: string;
};

export type InfoBoxModel = {
  id: number;
  title: string;
  location: string;
  location_maps_url: SimpleLinkModel;
  weekly_hours: WeeklyHours;
  contact_phone: SimpleLinkModel;
};

export type WeeklyHours = {
  id: number;
  monday_hours: HoursRange;
  tuesday_hours: HoursRange;
  wednesday_hours: HoursRange;
  thursday_hours: HoursRange;
  friday_hours: HoursRange;
  saturday_hours: HoursRange;
  sunday_hours: HoursRange;
};

export type HoursRange = {
  id: number;
  start_hour: string;
  start_minute: string;
  end_hour: string;
  end_minute: string;
};

export type WasteListModel = {
  id: number;
  title: string;
  description: string;
  waste_item: WasteItemModel[];
};

export type WasteItemModel = {
  id: number;
  title: string;
  description: string;
  icon: IconModel;
};

export type LocationMapImage = {
  location_name: string;
  location_map_image: ImageModel;
};

export type LocationMap = {
  achievements_title: string;
  achievements_subtitle: string;
  achievements_text: string;
  locations_map: LocationMapImage;
};

export type CrownRecyclingServicesInfo = {
  hero: HeroModel;
  intro: SimpleTextSection;
  services: SimpleTextSection;
  contact_boxes: ContactBoxesModel[];
  location_map_achievements: LocationMap;
};

export type ContactPhoneModel = {
  id: number;
  label: string;
  url: string;
  icon: IconModel;
};

export type ContactBoxesModel = {
  id: number;
  title: string;
  location: string | null;
  location_maps_url: SimpleLinkModel | null;
  weekly_hours: {
    hours: string;
  };
  contact_phone: ContactPhoneModel | null;
};

export type Law341Model = {
  hero: HeroModel;
  goal_reach: SimpleTextSection;
  faqs_resources: FaqsResourceModel;
};

export enum Lenguage {
  english = "English",
  spanish = "Spanish",
}

export enum Orientation {
  landscape = "landscape",
  portrait = "portrait",
}

export type FaqsResourceModel = {
  title: string;
  description: string;
  image: ImageModel;
  downloadable_resources: DownloadableResourceLaws[];
};

export type IrwindaleModel = {
  hero: HeroModel;
  intro: SimpleTextSection;
  location_map_achievements: LocationMap;
};

export type CalmetModel = {
  hero: HeroModel;
  title: string;
  subtitle: string;
  description: string;
  image: ImageModel;
  faqs_title: string;
  youtube_video: ImageModel;
  athens_way_image: ImageModel;
  athens_way_description: SimpleTextSection;
  athens_facts_title: string;
  athens_facts_image: ImageModelProps[];
  location_map_achievements: LocationMap;
  faqs: FAQSCategoryModel[];
  athens_facts_list: LinkStringModel[];
};

export type ImageModelMap = {};

export type FAQSCategoryModel = {
  id: number;
  faq_title: string;
  faq_items: FAQModel[];
};

export type LinkStringModel = {
  id: number;
  text: string;
};

export type EventListModel = {
  id: number;
  hero: HeroModel;
  event_items: EventModel[];
  events_info: SimpleTextSection;
  event_types: EventTypeItem[];
};

export type EventModel = {
  id: number;
  event_name: string;
  venue_name: string;
  start_date: EventDatetimeRange;
  end_date: EventDatetimeRange;
  event_image: ImageEventModel;
  address: string;
  address_google_maps_url: string;
  event_content: string;
  add_to_google_calendar: SimpleLinkModel;
  add_to_icalendar: SimpleLinkModel;
};

export type EventDatetimeRange = {
  date: string;
  start_hour: string;
  end_hour: string;
};

export type EventTypeItem = {
  id: number;
  title: string;
  content: string;
  image: ImageModel;
};

// changes this model
export type PaginationModel = {
  id: number;
  title: string;
  body: string;
  cost: string;
};

export type SBCModel = {
  id: number;
  hero: HeroModel;
  intro: SimpleTextSection;
  key_statistics_title: string;
  key_statistics: StatisticModel[];
  video_url: string;
  environment: SimpleTextSection;
  safety: SimpleTextSection;
  expansion: SimpleTextSection;
  landfills_map: SimpleTextSection;
  landfills_description: SimpleTextSection;
  landfills_list: LandfillModel[];
  transfer_stations_description: SimpleTextSection;
  transfer_stations_list: TransferStationModel[];
  location_map_achievements: LocationMap;
};

export type StatisticModel = {
  id: number;
  key: string;
  value: string;
};

export type LandfillModel = {
  id: number;
  name: string;
  opened_year: string;
  image: ImageModel;
  accepted_materials: ListStringItemModel[];
  equipment: ListStringItemModel[];
  address: string;
  phone: SimpleLinkModel;
  operating_hours: {
    id: number;
    hours: string;
  };
  swis_number: string;
  size: string;
  employees: string;
};

export type TransferStationModel = {
  id: number;
  name: string;
  map_url: string;
  address: string;
  operating_hours: {
    id: number;
    hours: string;
  };
  phone: SimpleLinkModel;
  employee: string;
};

export type AmericanOrganicModel = {
  hero: HeroModel;
  intro: SimpleTextSection;
  video: MediaModel | null;
  composting_process_name: string;
  composting_process_title: string;
  composting_process_steps: ComplexTextSection[];
  location_map_achievements: LocationMap;
  contact_boxes: ContactBoxesModel[];
};

export type SunValleyModel = {
  hero: HeroModel;
  intro: SimpleTextSection;
  video: MediaModel | null;
  recovering_process_name: string;
  recovering_process_title: string;
  explore_facilities: ComplexTextSection[];
  location_map_achievements: LocationMap;
};

export type ComplexTextSection = {
  id: number;
  title: string;
  content: string;
  items_list_title: string;
  items_list: ListStringModel[];
  items_list_image: MediaModel | null;
  video: MediaModel | null;
};

export type MediaPageModel = {
  hero: HeroModel;
  resources_title: string;
  youtube_resources: MediaYoutubeResources[];
  downloads_title: string;
  downladable_content_list: DownladableContentList[];
};

export type MediaYoutubeResources = {
  title: string;
  youtube_url: string;
};

export type DownladableContentList = {
  id: string;
  title: string;
  file_downloads: NoIconSimpleLink[];
};

export type NoIconSimpleLink = {
  label: string;
  url: string;
  image: MediaModel;
};
export type Stream = {
  data: {
    attributes: {
      key: string;
      url: string;
    };
  };
};

export type GuideCity = {
  id: number;
  attributes: {
    name: string;
    residential_recycling_guide: boolean;
    business_recycling_guide: boolean;
    residential_stream_type: Stream;
    business_stream_type: Stream;
  };
};

export type GuideCityResponse = {
  data: GuideCity[];
};

export type street_sweeping = {
  available: boolean;
  url: string;
};

export type ResidentialService = {
  hero: HeroModel;
  featured_services: Service[];
};

export type BusinessService = {
  hero: HeroModel;
  featured_services: Service[];
};

export type Service = {
  service_image: MediaModel;
  service_title: string;
  service_intro: string;
  service_description: string;
};

export type HomePageModel = {
  id: number;
  hero_image: ImageModel;
  intro: SimpleTextSection;
  offer_title: string;
  offer_intro: string;
  offer_items: OfferItemModel[];
  experience_eyebrow: string;
  experience_title: string;
  experience_intro: string;
  experiences: StatisticModel[];
  infra_eyebrow: string;
  infra_title: string;
  infra_intro: string;
  infra_specifics: string;
  earth_commitment: SimpleTextSection;
  earth_commitments_title: string;
  earth_commitment_items: EarthCommitmentItemModel[];
  commercial_break: ComplexTextSection;
  testimonials_title: string;
  testimonials: TestimonialModel[];
  upcoming_events_title: string;
  upcoming_events_intro: string;
};

export type OfferItemModel = {
  id: number;
  title: string;
  image: ImageModel;
  learn_more_link: SimpleLinkModel;
};

export type EarthCommitmentItemModel = {
  id: number;
  icon: IconModel;
  description: string;
};

export type TestimonialModel = {
  id: number;
  customer_full_name: string;
  customer_title: string;
  customer_company: string;
  testimonial: string;
};

export type PaymentMethod = {
  customerId: number;
  paymentMethodId: number;
  customerFirstName: string;
  customerMiddleName: string;
  customerLastName: string;
  customerAddressLine1: string;
  customerAddressLine2: string;
  customerState: string;
  customerCity: string;
  customerZip: string;
  paymentMethodType: string;
  paymentMethodLast4: string;
  paymentMethodCcv: string;
  paymentMethodExpirationDate: string;
  paymentMethodToken: string;
  paymentMethodCardNumber: string;
  paymentMethodBank: string;
  paymentMethodBankRoutingNumber: string;
  paymentMethodBankAccountNumber: string;
  paymentMethodBankAccountType: string;
  paymentMethodIsOneTime: number;
};

export type EarthCommitmentModel = {
  id: number;
  hero: HeroModel;
  content: string;
};

export type HolidayTree = {
  id: number;
  hero: HeroModel;
  content: string;
};

import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAccessibilityAccessibility extends Schema.SingleType {
  collectionName: 'accessibilities';
  info: {
    singularName: 'accessibility';
    pluralName: 'accessibilities';
    displayName: 'Accessibility';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    content: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::accessibility.accessibility',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::accessibility.accessibility',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAmericanOrganicAmericanOrganic extends Schema.SingleType {
  collectionName: 'american_organics';
  info: {
    singularName: 'american-organic';
    pluralName: 'american-organics';
    displayName: 'American Organic';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    intro: Attribute.Component<'data.simple-text-section'>;
    video: Attribute.Media;
    composting_process_name: Attribute.String;
    composting_process_title: Attribute.String;
    composting_process_steps: Attribute.Component<
      'data.complex-text-section',
      true
    >;
    contact_boxes: Attribute.Component<'data.info-box', true>;
    location_map_achievements: Attribute.Component<'data.location-map-achievements'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::american-organic.american-organic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::american-organic.american-organic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAthensWayAthensWay extends Schema.SingleType {
  collectionName: 'athens_ways';
  info: {
    singularName: 'athens-way';
    pluralName: 'athens-ways';
    displayName: 'Athens Way';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.RichText;
    description_image: Attribute.Media;
    company_milestones: Attribute.Component<'data.company-milestones', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::athens-way.athens-way',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::athens-way.athens-way',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBinTypeNameBinTypeName extends Schema.CollectionType {
  collectionName: 'bin_type_names';
  info: {
    singularName: 'bin-type-name';
    pluralName: 'bin-type-names';
    displayName: 'Bin Type';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bin_type_name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bin-type-name.bin-type-name',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bin-type-name.bin-type-name',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBusinessServiceBusinessService extends Schema.SingleType {
  collectionName: 'business_services';
  info: {
    singularName: 'business-service';
    pluralName: 'business-services';
    displayName: 'Business Services';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    featured_services: Attribute.Component<'data.service', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::business-service.business-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::business-service.business-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCalmetServiceCalmetService extends Schema.SingleType {
  collectionName: 'calmet_services';
  info: {
    singularName: 'calmet-service';
    pluralName: 'calmet-services';
    displayName: 'Calmet Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
    faqs_title: Attribute.String;
    youtube_video: Attribute.Media;
    athens_way_image: Attribute.Media;
    athens_way_description: Attribute.Component<'data.simple-text-section'>;
    athens_facts_title: Attribute.String;
    location_map_achievements: Attribute.Component<'data.location-map-achievements'>;
    faqs: Attribute.Component<'data.faq-calmet', true>;
    athens_facts_list: Attribute.Component<'data.examples-list', true>;
    athens_facts_image: Attribute.Component<'data.image', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::calmet-service.calmet-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::calmet-service.calmet-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCareerCareer extends Schema.SingleType {
  collectionName: 'careers';
  info: {
    singularName: 'career';
    pluralName: 'careers';
    displayName: 'Career';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    title: Attribute.String;
    image: Attribute.Media;
    all_positions_link: Attribute.Component<'data.simple-link'>;
    driver_applicants_link: Attribute.Component<'data.simple-link'>;
    internal_applicants_link: Attribute.Component<'data.simple-link'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCityCity extends Schema.CollectionType {
  collectionName: 'cities';
  info: {
    singularName: 'city';
    pluralName: 'cities';
    displayName: 'City';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    residential_services_available: Attribute.Boolean &
      Attribute.DefaultTo<false>;
    business_services_available: Attribute.Boolean & Attribute.DefaultTo<false>;
    open_market: Attribute.Boolean & Attribute.DefaultTo<false>;
    county: Attribute.Component<'data.county'>;
    customer_service_line_telephone_number: Attribute.String;
    collection_map_schedule_pdf_url: Attribute.String;
    container_organics: Attribute.Component<'data.material-list'>;
    container_landfill: Attribute.Component<'data.material-list'>;
    container_recycling: Attribute.Component<'data.material-list'>;
    container_prohibited: Attribute.Component<'data.material-list'>;
    bulky_pick_up_available: Attribute.Boolean;
    bulky_items_examples: Attribute.Component<'data.material-list'>;
    street_sweeping_available: Attribute.Boolean;
    street_sweeping_map_url: Attribute.String;
    holiday_tree_recycling_available: Attribute.Boolean;
    city_faqs: Attribute.Component<'data.link-list', true>;
    residential_recycling_guide: Attribute.Boolean & Attribute.DefaultTo<false>;
    residential_stream_type: Attribute.Relation<
      'api::city.city',
      'oneToOne',
      'api::stream.stream'
    >;
    business_recycling_guide: Attribute.Boolean & Attribute.DefaultTo<false>;
    business_stream_type: Attribute.Relation<
      'api::city.city',
      'oneToOne',
      'api::stream.stream'
    >;
    logo: Attribute.Media;
    front_load_3_yard_bin_available: Attribute.Boolean;
    compactors_lease_available: Attribute.Boolean;
    roll_off_available: Attribute.Boolean;
    residential_service_details: Attribute.Component<'data.city-service-details'>;
    business_service_details: Attribute.Component<'data.city-service-details'>;
    residential_customer_service_available: Attribute.Boolean &
      Attribute.DefaultTo<false>;
    business_customer_service_available: Attribute.Boolean &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::city.city', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCompanyInfoCompanyInfo extends Schema.SingleType {
  collectionName: 'company_infos';
  info: {
    singularName: 'company-info';
    pluralName: 'company-infos';
    displayName: 'Company Info';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    facebook_url: Attribute.String;
    instagram_url: Attribute.String;
    x_url: Attribute.String;
    linkedin_url: Attribute.String;
    youtube_url: Attribute.String;
    company_logo_vector: Attribute.Media;
    customer_service_phone: Attribute.String;
    careers_service_phone: Attribute.String;
    careers_email_address: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::company-info.company-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::company-info.company-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactInfoContactInfo extends Schema.SingleType {
  collectionName: 'contact_infos';
  info: {
    singularName: 'contact-info';
    pluralName: 'contact-infos';
    displayName: 'Contact Info';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    customer_service_phone: Attribute.String;
    customer_service_url: Attribute.String;
    location_url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-info.contact-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-info.contact-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContainerMaterialTypeContainerMaterialType
  extends Schema.CollectionType {
  collectionName: 'container_material_types';
  info: {
    singularName: 'container-material-type';
    pluralName: 'container-material-types';
    displayName: 'Container Material Type';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    material_type: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::container-material-type.container-material-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::container-material-type.container-material-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContainerSizeContainerSize extends Schema.CollectionType {
  collectionName: 'container_sizes';
  info: {
    singularName: 'container-size';
    pluralName: 'container-sizes';
    displayName: 'Container Size';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bin_volume: Attribute.String;
    bin_height: Attribute.String;
    bin_width: Attribute.String;
    bin_length: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::container-size.container-size',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::container-size.container-size',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContainerSizePageContainerSizePage
  extends Schema.SingleType {
  collectionName: 'container_size_pages';
  info: {
    singularName: 'container-size-page';
    pluralName: 'container-size-pages';
    displayName: 'Container Size Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    containers: Attribute.Component<'data.container-item', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::container-size-page.container-size-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::container-size-page.container-size-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContainerUseContainerUse extends Schema.CollectionType {
  collectionName: 'container_uses';
  info: {
    singularName: 'container-use';
    pluralName: 'container-uses';
    displayName: 'Container Uses';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    container_use: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::container-use.container-use',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::container-use.container-use',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContractorServiceContractorService
  extends Schema.SingleType {
  collectionName: 'contractor_services';
  info: {
    singularName: 'contractor-service';
    pluralName: 'contractor-services';
    displayName: 'Contractor Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    subtitle: Attribute.Text;
    intro: Attribute.RichText;
    services: Attribute.Component<'data.simple-list', true>;
    hero: Attribute.Component<'data.hero'>;
    picture: Attribute.Media;
    video: Attribute.Media;
    container: Attribute.Component<'data.container'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contractor-service.contractor-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contractor-service.contractor-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCrownRecyclingServiceCrownRecyclingService
  extends Schema.SingleType {
  collectionName: 'crown_recycling_services';
  info: {
    singularName: 'crown-recycling-service';
    pluralName: 'crown-recycling-services';
    displayName: 'Crown Recycling Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    intro: Attribute.Component<'data.simple-text-section'>;
    services: Attribute.Component<'data.simple-text-section'>;
    contact_boxes: Attribute.Component<'data.info-box', true>;
    location_map_achievements: Attribute.Component<'data.location-map-achievements'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::crown-recycling-service.crown-recycling-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::crown-recycling-service.crown-recycling-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCustomerServiceFormCustomerServiceForm
  extends Schema.SingleType {
  collectionName: 'customer_service_forms';
  info: {
    singularName: 'customer-service-form';
    pluralName: 'customer-service-forms';
    displayName: 'Customer Service Form';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::customer-service-form.customer-service-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::customer-service-form.customer-service-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEarthCommitmentEarthCommitment extends Schema.SingleType {
  collectionName: 'earth_commitments';
  info: {
    singularName: 'earth-commitment';
    pluralName: 'earth-commitments';
    displayName: 'Earth Commitment';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    content: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::earth-commitment.earth-commitment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::earth-commitment.earth-commitment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventsListEventsList extends Schema.SingleType {
  collectionName: 'events_lists';
  info: {
    singularName: 'events-list';
    pluralName: 'events-lists';
    displayName: 'Events List';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'> & Attribute.Required;
    event_items: Attribute.Component<'data.event', true> & Attribute.Required;
    events_info: Attribute.Component<'data.simple-text-section'>;
    event_types: Attribute.Component<'data.event-type-item', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::events-list.events-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::events-list.events-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqFaq extends Schema.SingleType {
  collectionName: 'faqs';
  info: {
    singularName: 'faq';
    pluralName: 'faqs';
    displayName: 'FAQ';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    subtitle: Attribute.String;
    faq_item: Attribute.Component<'data.faq-item', true>;
    term_item: Attribute.Component<'data.term-item', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFoodDonationFoodDonation extends Schema.SingleType {
  collectionName: 'food_donations';
  info: {
    singularName: 'food-donation';
    pluralName: 'food-donations';
    displayName: 'Food Donation';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    why_donate: Attribute.Component<'data.simple-text-section'>;
    donation_benefits: Attribute.Component<'data.simple-text-section'>;
    donation_protection: Attribute.Component<'data.simple-text-section'>;
    what_donate: Attribute.Component<'data.simple-text-section'>;
    date_labels: Attribute.Component<'data.simple-text-section'>;
    how_donate: Attribute.Component<'data.organic-recycling-process'>;
    food_recovery_partner: Attribute.Component<'data.simple-text-section'>;
    select_partner_title: Attribute.Text;
    donation_city_contacts: Attribute.Component<
      'data.food-donation-city-contacts',
      true
    >;
    waste_prevention: Attribute.Component<'data.simple-text-section'>;
    reduction_recovery: Attribute.Component<'data.simple-text-section'>;
    references: Attribute.Component<'data.simple-text-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::food-donation.food-donation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::food-donation.food-donation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterNavFooterNav extends Schema.SingleType {
  collectionName: 'footer_navs';
  info: {
    singularName: 'footer-nav';
    pluralName: 'footer-navs';
    displayName: 'Footer Nav';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    simple_nav: Attribute.Component<'data.simple-nav', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer-nav.footer-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer-nav.footer-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHolidayTreeHolidayTree extends Schema.SingleType {
  collectionName: 'holiday_trees';
  info: {
    singularName: 'holiday-tree';
    pluralName: 'holiday-trees';
    displayName: 'Holiday Tree';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'> & Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::holiday-tree.holiday-tree',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::holiday-tree.holiday-tree',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: 'home_pages';
  info: {
    singularName: 'home-page';
    pluralName: 'home-pages';
    displayName: 'Home Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_image: Attribute.Media & Attribute.Required;
    offer_title: Attribute.String & Attribute.Required;
    offer_intro: Attribute.Text & Attribute.Required;
    offer_items: Attribute.Component<'data.offer-item', true> &
      Attribute.Required;
    experience_eyebrow: Attribute.String & Attribute.Required;
    experience_title: Attribute.String & Attribute.Required;
    experience_intro: Attribute.String & Attribute.Required;
    experiences: Attribute.Component<'data.static', true> & Attribute.Required;
    infra_eyebrow: Attribute.String & Attribute.Required;
    infra_title: Attribute.String & Attribute.Required;
    infra_intro: Attribute.RichText & Attribute.Required;
    infra_specifics: Attribute.RichText & Attribute.Required;
    earth_commitment: Attribute.Component<'data.simple-text-section'> &
      Attribute.Required;
    earth_commitments_title: Attribute.String & Attribute.Required;
    earth_commitment_items: Attribute.Component<
      'data.earth-commitment-item',
      true
    >;
    testimonials_title: Attribute.String & Attribute.Required;
    testimonials: Attribute.Component<'data.testimonial', true> &
      Attribute.Required;
    upcoming_events_title: Attribute.String & Attribute.Required;
    upcoming_events_intro: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomeTipHomeTip extends Schema.SingleType {
  collectionName: 'home_tips';
  info: {
    singularName: 'home-tip';
    pluralName: 'home-tips';
    displayName: 'Home Tip';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    subtitle: Attribute.Text;
    intro: Attribute.RichText;
    intro_media: Attribute.Media;
    tips_section: Attribute.Component<'data.tips-section', true>;
    reference_quotes: Attribute.Component<'data.reference-quote-item', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-tip.home-tip',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-tip.home-tip',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIconIcon extends Schema.CollectionType {
  collectionName: 'icons';
  info: {
    singularName: 'icon';
    pluralName: 'icons';
    displayName: 'Icon';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    icon: Attribute.Media;
    key: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::icon.icon', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::icon.icon', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiImageImage extends Schema.CollectionType {
  collectionName: 'images';
  info: {
    singularName: 'image';
    pluralName: 'images';
    displayName: 'Bin Type Image';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::image.image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::image.image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIrwindaleIrwindale extends Schema.SingleType {
  collectionName: 'irwindales';
  info: {
    singularName: 'irwindale';
    pluralName: 'irwindales';
    displayName: 'Irwindale';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    intro: Attribute.Component<'data.simple-text-section'>;
    location_map_achievements: Attribute.Component<'data.location-map-achievements'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::irwindale.irwindale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::irwindale.irwindale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLawAb1826LawAb1826 extends Schema.SingleType {
  collectionName: 'law_ab_1826s';
  info: {
    singularName: 'law-ab-1826';
    pluralName: 'law-ab-1826s';
    displayName: 'Law AB1826';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    commercial_organics_recycling: Attribute.Component<'data.simple-text-section'>;
    timeline: Attribute.Component<'data.simple-text-section'>;
    american_organics_intro: Attribute.Component<'data.simple-text-section'>;
    american_organics: Attribute.Component<'data.simple-text-section'>;
    downloadable_resources: Attribute.Component<'data.file-download', true>;
    organics_waste_examples: Attribute.Component<
      'data.organics-waste-example',
      true
    >;
    contact_boxes: Attribute.Component<'data.info-box', true> &
      Attribute.SetMinMax<{
        min: 3;
        max: 3;
      }>;
    accepted_organics_waste: Attribute.Component<'data.waste-list'>;
    unaccepted_organics_waste: Attribute.Component<'data.waste-list'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::law-ab-1826.law-ab-1826',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::law-ab-1826.law-ab-1826',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLawAb341LawAb341 extends Schema.SingleType {
  collectionName: 'law_ab_341s';
  info: {
    singularName: 'law-ab-341';
    pluralName: 'law-ab-341s';
    displayName: 'Law AB341';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    goal_reach: Attribute.Component<'data.simple-text-section'>;
    faqs_resources: Attribute.Component<'data.faqs-resources'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::law-ab-341.law-ab-341',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::law-ab-341.law-ab-341',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLawSb1383LawSb1383 extends Schema.SingleType {
  collectionName: 'law_sb_1383s';
  info: {
    singularName: 'law-sb-1383';
    pluralName: 'law-sb-1383s';
    displayName: 'Law SB1383';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    what_is: Attribute.Component<'data.simple-text-section'>;
    apply_to: Attribute.Component<'data.simple-text-section'>;
    new_regulation: Attribute.Component<'data.simple-text-section'>;
    why_compost: Attribute.Component<'data.simple-text-section'>;
    best_practices: Attribute.Component<'data.simple-text-section'>;
    downloadable_resources: Attribute.Component<'data.file-download', true> &
      Attribute.Required;
    business_impact_pt1: Attribute.Component<'data.simple-text-section'>;
    business_impact_url: Attribute.String;
    business_impact_pt2: Attribute.Component<'data.simple-text-section'>;
    to_know_title: Attribute.String;
    youtube_url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::law-sb-1383.law-sb-1383',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::law-sb-1383.law-sb-1383',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMainNavMainNav extends Schema.SingleType {
  collectionName: 'main_navs';
  info: {
    singularName: 'main-nav';
    pluralName: 'main-navs';
    displayName: 'Main Nav';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    navigation: Attribute.Component<'data.menu-nav-item', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::main-nav.main-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::main-nav.main-nav',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMaterialMaterial extends Schema.CollectionType {
  collectionName: 'materials';
  info: {
    singularName: 'material';
    pluralName: 'materials';
    displayName: 'Material';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    icon: Attribute.Relation<
      'api::material.material',
      'oneToOne',
      'api::icon.icon'
    >;
    title: Attribute.String;
    description: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::material.material',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::material.material',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMaterialReuseMaterialReuse extends Schema.SingleType {
  collectionName: 'material_reuses';
  info: {
    singularName: 'material-reuse';
    pluralName: 'material-reuses';
    displayName: 'Material Reuse';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    intro: Attribute.Component<'data.simple-text-section'>;
    repair: Attribute.Component<'data.simple-text-section'>;
    repurpose_upcycle: Attribute.Component<'data.simple-text-section'>;
    share_community: Attribute.Component<'data.simple-text-section'>;
    donate: Attribute.Component<'data.simple-text-section'>;
    buy_sell_secondhand: Attribute.Component<'data.simple-text-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::material-reuse.material-reuse',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::material-reuse.material-reuse',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMediaMedia extends Schema.SingleType {
  collectionName: 'medias';
  info: {
    singularName: 'media';
    pluralName: 'medias';
    displayName: 'Media';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    resources_title: Attribute.String;
    downloads_title: Attribute.String;
    downladable_content_list: Attribute.Component<
      'data.downladable-content-list',
      true
    >;
    youtube_resources: Attribute.Component<'data.media', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::media.media',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::media.media',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNewsListNewsList extends Schema.SingleType {
  collectionName: 'news_lists';
  info: {
    singularName: 'news-list';
    pluralName: 'news-lists';
    displayName: 'News List';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    news_items: Attribute.Component<'data.news-page', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::news-list.news-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::news-list.news-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOfficeTipOfficeTip extends Schema.SingleType {
  collectionName: 'office_tips';
  info: {
    singularName: 'office-tip';
    pluralName: 'office-tips';
    displayName: 'Office Tip';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    subtitle: Attribute.Text;
    intro: Attribute.RichText;
    intro_media: Attribute.Media;
    tips_section: Attribute.Component<'data.tips-section', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::office-tip.office-tip',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::office-tip.office-tip',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrganicRecyclingServiceOrganicRecyclingService
  extends Schema.SingleType {
  collectionName: 'organic_recycling_services';
  info: {
    singularName: 'organic-recycling-service';
    pluralName: 'organic-recycling-services';
    displayName: 'Organics Recycling Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    youtube_url: Attribute.Text;
    process: Attribute.Component<'data.organic-recycling-process'>;
    resources: Attribute.Component<'data.downloadable-resources'>;
    hero: Attribute.Component<'data.hero'>;
    kitchen_pail_description: Attribute.RichText;
    kitchen_pail_image: Attribute.Media;
    faqs: Attribute.Component<'data.faq-item', true>;
    kitchen_pail_title: Attribute.String;
    process_title: Attribute.String;
    clean_kitchen_pail_tips: Attribute.Component<'data.simple-text-section'>;
    containers_audit: Attribute.Component<'data.simple-text-section'>;
    acceptable_waste: Attribute.Component<'data.waste-list'>;
    unacceptable_waste: Attribute.Component<'data.waste-list'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organic-recycling-service.organic-recycling-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::organic-recycling-service.organic-recycling-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOurLocationOurLocation extends Schema.SingleType {
  collectionName: 'our_locations';
  info: {
    singularName: 'our-location';
    pluralName: 'our-locations';
    displayName: 'Our Location';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    corporate_offices_title: Attribute.String;
    headquarter_location: Attribute.Component<'data.location-item', true>;
    customer_service_centers_title: Attribute.String;
    customer_service_centers_locations: Attribute.Component<
      'data.location-item',
      true
    >;
    facilities_title: Attribute.String;
    facility_locations: Attribute.Component<'data.location-item', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::our-location.our-location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::our-location.our-location',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOutreachMaterialOutreachMaterial extends Schema.SingleType {
  collectionName: 'outreach_materials';
  info: {
    singularName: 'outreach-material';
    pluralName: 'outreach-materials';
    displayName: 'Outreach Material';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    what_goes_where: Attribute.Component<'data.simple-text-section'> &
      Attribute.Required;
    reuse_repurpose_repair_donate: Attribute.Component<'data.simple-text-section'> &
      Attribute.Required;
    athens_recycling_signage_title: Attribute.Component<'data.simple-text-section'> &
      Attribute.Required;
    athens_recycling_signage_resource: Attribute.Component<
      'data.recycling-signage-resource',
      true
    > &
      Attribute.Required;
    hazardous_waste_cheat_sheets_title: Attribute.String & Attribute.Required;
    hazardous_waste_cheat_sheets_description: Attribute.RichText &
      Attribute.Required;
    hazardous_waste_cheat_sheets_image: Attribute.Media;
    hazardous_waste_cheat_sheets_resources: Attribute.Component<
      'data.recycling-signage-resource',
      true
    > &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 2;
      }>;
    additional_tenant_signage_title: Attribute.String & Attribute.Required;
    additional_tenant_signage_description: Attribute.RichText &
      Attribute.Required;
    additional_tenant_signage_resources: Attribute.Component<
      'data.recycling-signage-resource',
      true
    > &
      Attribute.Required;
    zero_waste_school_program_language_title: Attribute.String &
      Attribute.Required;
    zero_waste_school_program_signage_resource: Attribute.Component<
      'data.recycling-signage-resource',
      true
    > &
      Attribute.Required;
    measure_your_footprint_title: Attribute.String & Attribute.Required;
    environmentally_preferable_purchasing_title: Attribute.String &
      Attribute.Required;
    environmentally_preferable_purchasing_resources: Attribute.Component<
      'data.external-resources',
      true
    > &
      Attribute.Required;
    climate_and_waste_calculators_title: Attribute.String & Attribute.Required;
    climate_and_waste_calculators_description: Attribute.RichText &
      Attribute.Required;
    climate_and_waste_calculators_resources: Attribute.Component<
      'data.external-resources',
      true
    > &
      Attribute.Required;
    additional_online_resources_title: Attribute.String & Attribute.Required;
    additional_online_resources_resources: Attribute.Component<
      'data.external-resources',
      true
    > &
      Attribute.Required;
    local_environmental_resources: Attribute.RichText & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::outreach-material.outreach-material',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::outreach-material.outreach-material',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrivacyPolicyPrivacyPolicy extends Schema.SingleType {
  collectionName: 'privacy_policies';
  info: {
    singularName: 'privacy-policy';
    pluralName: 'privacy-policies';
    displayName: 'Privacy Policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    context: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRecyclingGuidePageRecyclingGuidePage
  extends Schema.SingleType {
  collectionName: 'recycling_guide_pages';
  info: {
    singularName: 'recycling-guide-page';
    pluralName: 'recycling-guide-pages';
    displayName: 'Recycling Guide Page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    simple_text_section: Attribute.Component<'data.simple-text-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::recycling-guide-page.recycling-guide-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::recycling-guide-page.recycling-guide-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRentAContainerRentAContainer extends Schema.SingleType {
  collectionName: 'rent_a_containers';
  info: {
    singularName: 'rent-a-container';
    pluralName: 'rent-a-containers';
    displayName: 'Rent A Container';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rent-a-container.rent-a-container',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::rent-a-container.rent-a-container',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiResidentialServiceResidentialService
  extends Schema.SingleType {
  collectionName: 'residential_services';
  info: {
    singularName: 'residential-service';
    pluralName: 'residential-services';
    displayName: 'Residential Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cities: Attribute.Component<'data.simple-link', true>;
    hero: Attribute.Component<'data.hero'>;
    featured_services: Attribute.Component<'data.service', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::residential-service.residential-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::residential-service.residential-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSanBernardinoCountySanBernardinoCounty
  extends Schema.SingleType {
  collectionName: 'san_bernardino_counties';
  info: {
    singularName: 'san-bernardino-county';
    pluralName: 'san-bernardino-counties';
    displayName: 'San Bernardino County';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    intro: Attribute.Component<'data.simple-text-section'>;
    key_statistics_title: Attribute.String;
    key_statistics: Attribute.Component<'data.static', true> &
      Attribute.Required;
    environment: Attribute.Component<'data.simple-text-section'>;
    safety: Attribute.Component<'data.simple-text-section'>;
    expansion: Attribute.Component<'data.simple-text-section'>;
    landfills_map: Attribute.Component<'data.simple-text-section'>;
    landfills_description: Attribute.Component<'data.simple-text-section'>;
    landfills_list: Attribute.Component<'data.landfill', true> &
      Attribute.Required;
    transfer_stations_description: Attribute.Component<'data.simple-text-section'>;
    transfer_stations_list: Attribute.Component<'data.transfer-station', true> &
      Attribute.Required;
    location_map_achievements: Attribute.Component<'data.location-map-achievements'>;
    video_url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::san-bernardino-county.san-bernardino-county',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::san-bernardino-county.san-bernardino-county',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSpecialWasteSpecialWaste extends Schema.SingleType {
  collectionName: 'special_wastes';
  info: {
    singularName: 'special-waste';
    pluralName: 'special-wastes';
    displayName: 'Special Waste';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    subtitle: Attribute.String;
    intro: Attribute.Text;
    special_waste_services: Attribute.Component<
      'data.special-waste-service',
      true
    >;
    hero: Attribute.Component<'data.hero'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::special-waste.special-waste',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::special-waste.special-waste',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStreamStream extends Schema.CollectionType {
  collectionName: 'streams';
  info: {
    singularName: 'stream';
    pluralName: 'streams';
    displayName: 'Stream';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    key: Attribute.String;
    url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::stream.stream',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::stream.stream',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStreetSweepingStreetSweeping extends Schema.SingleType {
  collectionName: 'street_sweepings';
  info: {
    singularName: 'street-sweeping';
    pluralName: 'street-sweepings';
    displayName: 'Street Sweeping';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    intro: Attribute.Text;
    youtube: Attribute.String;
    ideal_property_type: Attribute.Component<'data.ideal-property-types', true>;
    contracts_list: Attribute.Component<'data.contracts-list', true>;
    subtitle: Attribute.String;
    hero: Attribute.Component<'data.hero'>;
    office_hours: Attribute.Component<'data.office-hours', true>;
    services: Attribute.Component<'data.simple-list', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::street-sweeping.street-sweeping',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::street-sweeping.street-sweeping',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSunValleyServiceSunValleyService extends Schema.SingleType {
  collectionName: 'sun_valley_services';
  info: {
    singularName: 'sun-valley-service';
    pluralName: 'sun-valley-services';
    displayName: 'Sun valley services';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    intro: Attribute.Component<'data.simple-text-section'>;
    video: Attribute.Media;
    recovering_process_name: Attribute.String;
    recovering_process_title: Attribute.String;
    explore_facilities: Attribute.Component<'data.complex-text-section', true>;
    location_map_achievements: Attribute.Component<'data.location-map-achievements'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sun-valley-service.sun-valley-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sun-valley-service.sun-valley-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiZeroWasteZeroWaste extends Schema.SingleType {
  collectionName: 'zero_wastes';
  info: {
    singularName: 'zero-waste';
    pluralName: 'zero-wastes';
    displayName: 'Zero Waste';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero: Attribute.Component<'data.hero'>;
    what_is_zero_waste: Attribute.Component<'data.process-section'>;
    why_zero_waste: Attribute.Component<'data.simple-text-section'>;
    how_reduce_waste: Attribute.Component<'data.simple-text-section'>;
    reduce_waste_links: Attribute.Component<'data.simple-text-item', true>;
    value_composting: Attribute.Component<'data.simple-text-section'>;
    american_organics_about: Attribute.Component<'data.simple-text-section'>;
    compost_giveways: Attribute.RichText;
    at_home_composting_resources: Attribute.RichText;
    intro_subtitle: Attribute.String;
    intro_message: Attribute.RichText;
    at_home_composting_resources_image: Attribute.Component<
      'data.simple-text-item',
      true
    >;
    compost_giveways_image: Attribute.Component<
      'data.compost-giveways-image',
      true
    >;
    did_you_know: Attribute.Component<'data.simple-text-section'>;
    american_organics_accepted_waste: Attribute.Component<'data.waste-list'>;
    american_organics_prohibited_waste: Attribute.Component<'data.waste-list'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::zero-waste.zero-waste',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::zero-waste.zero-waste',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::accessibility.accessibility': ApiAccessibilityAccessibility;
      'api::american-organic.american-organic': ApiAmericanOrganicAmericanOrganic;
      'api::athens-way.athens-way': ApiAthensWayAthensWay;
      'api::bin-type-name.bin-type-name': ApiBinTypeNameBinTypeName;
      'api::business-service.business-service': ApiBusinessServiceBusinessService;
      'api::calmet-service.calmet-service': ApiCalmetServiceCalmetService;
      'api::career.career': ApiCareerCareer;
      'api::city.city': ApiCityCity;
      'api::company-info.company-info': ApiCompanyInfoCompanyInfo;
      'api::contact-info.contact-info': ApiContactInfoContactInfo;
      'api::container-material-type.container-material-type': ApiContainerMaterialTypeContainerMaterialType;
      'api::container-size.container-size': ApiContainerSizeContainerSize;
      'api::container-size-page.container-size-page': ApiContainerSizePageContainerSizePage;
      'api::container-use.container-use': ApiContainerUseContainerUse;
      'api::contractor-service.contractor-service': ApiContractorServiceContractorService;
      'api::crown-recycling-service.crown-recycling-service': ApiCrownRecyclingServiceCrownRecyclingService;
      'api::customer-service-form.customer-service-form': ApiCustomerServiceFormCustomerServiceForm;
      'api::earth-commitment.earth-commitment': ApiEarthCommitmentEarthCommitment;
      'api::events-list.events-list': ApiEventsListEventsList;
      'api::faq.faq': ApiFaqFaq;
      'api::food-donation.food-donation': ApiFoodDonationFoodDonation;
      'api::footer-nav.footer-nav': ApiFooterNavFooterNav;
      'api::holiday-tree.holiday-tree': ApiHolidayTreeHolidayTree;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::home-tip.home-tip': ApiHomeTipHomeTip;
      'api::icon.icon': ApiIconIcon;
      'api::image.image': ApiImageImage;
      'api::irwindale.irwindale': ApiIrwindaleIrwindale;
      'api::law-ab-1826.law-ab-1826': ApiLawAb1826LawAb1826;
      'api::law-ab-341.law-ab-341': ApiLawAb341LawAb341;
      'api::law-sb-1383.law-sb-1383': ApiLawSb1383LawSb1383;
      'api::main-nav.main-nav': ApiMainNavMainNav;
      'api::material.material': ApiMaterialMaterial;
      'api::material-reuse.material-reuse': ApiMaterialReuseMaterialReuse;
      'api::media.media': ApiMediaMedia;
      'api::news-list.news-list': ApiNewsListNewsList;
      'api::office-tip.office-tip': ApiOfficeTipOfficeTip;
      'api::organic-recycling-service.organic-recycling-service': ApiOrganicRecyclingServiceOrganicRecyclingService;
      'api::our-location.our-location': ApiOurLocationOurLocation;
      'api::outreach-material.outreach-material': ApiOutreachMaterialOutreachMaterial;
      'api::privacy-policy.privacy-policy': ApiPrivacyPolicyPrivacyPolicy;
      'api::recycling-guide-page.recycling-guide-page': ApiRecyclingGuidePageRecyclingGuidePage;
      'api::rent-a-container.rent-a-container': ApiRentAContainerRentAContainer;
      'api::residential-service.residential-service': ApiResidentialServiceResidentialService;
      'api::san-bernardino-county.san-bernardino-county': ApiSanBernardinoCountySanBernardinoCounty;
      'api::special-waste.special-waste': ApiSpecialWasteSpecialWaste;
      'api::stream.stream': ApiStreamStream;
      'api::street-sweeping.street-sweeping': ApiStreetSweepingStreetSweeping;
      'api::sun-valley-service.sun-valley-service': ApiSunValleyServiceSunValleyService;
      'api::zero-waste.zero-waste': ApiZeroWasteZeroWaste;
    }
  }
}

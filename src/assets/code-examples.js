export const profileStore = `{
  organizations: {},
  permissions: {},
  skills: {},
  user: {},
  workExperiences: {}
}`;

export const interviewScheduleStore = `{
  applicants: {},
  employers: {},
  jobs: {},
  rooms: {},
  slots: {}
}`;

export const globalStore = `{
  entities: {
    users: {
      1: {
        id: 1,
        firstName: "Chris",
        lastName: "Schmitz"
      }
    }
  },
  forms: { ... },
  permissions: { ... },
  router: { ... },
  session: {
    currentUser: {
      id: 1
    }
  }
}`;

export const actionsBefore =
`export const REQUEST_ORGANIZATIONS = "REQUEST_ORGANIZATIONS";
export const FETCH_ORGANIZATIONS_SUCCESS = "FETCH_ORGANIZATIONS_SUCCESS";
export const FETCH_ORGANIZATIONS_FAILURE = "FETCH_ORGANIZATIONS_FAILURE";

export function requestOrganizations() {
  return {
    type: REQUEST_ORGANIZATIONS
  };
}

export function fetchOrganizationsSuccess(organizationMemberships) {
  return {
    type: FETCH_ORGANIZATIONS_SUCCESS,
    payload: organizationMemberships
  };
}

export function fetchOrganizationsFailure(error) {
  return {
    type: FETCH_ORGANIZATIONS_FAILURE,
    payload: error
  };
}
`;

export const reducerBefore =
`export function organizations(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ORGANIZATIONS:
      return {
        ...initialState,
        isFetching: true
      };
    case FETCH_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        organizations: action.payload,
        isFetching: false
      };
    case FETCH_ORGANIZATIONS_FAILURE:
      return {
        ...state,
        organizations: [],
        isFetching: false
      };
    default:
      return state;
  }
}
`;

export const entitiesReducer =
`function entitiesReducer(state, action) {
  switch (action.type) {
    case INSERT_ENTITIES:
      return {
        ...state,
        ...action.payload.entities
      };
    case REMOVE_ENTITIES:
      return {
        ...state,
        ...{
          [action.payload.schema]: omit(state[action.payload.schema], action.payload.id)
        }
      };
    default:
      return state;
  }
}`

export const entityActions =
`export const insertEntities = payload => ({
  type: INSERT_ENTITIES,
  payload
});

export const removeEntities = (ids, schema) => ({
  type: REMOVE_ENTITIES,
  payload: { ids, schema }
});`;

export const fetchEntity =
`export function fetchEntity(entity) {
  return dispatch =>
    http
      .get(entityPath(entity))
      .then(response => {
        const { entities } = normalize(
          response[entity.type],
          schemas[pluralize(entity.type)]
        );

        dispatch(insertEntities({ entities }));
      });
}`;

export const messyMapStateToProps =
`function mapStateToProps(state) {
  return {
    job: state.entities.jobs[state.router.id],
    favorites: findWhere(state.entities.favorites, {
      userId: state.sessions.currentUser.id,
      favoritableType: "Job"
    }),
    primaryEducation: findWhere(state.entities.educations, {
      userId: state.session.currentUser.id,
      primaryEducation: true
    }),
  };
}`;

export const selectorsMapStateToProps =
`function mapStateToProps(state) {
  return {
    job: getCurrentEntity(state),
    favorites: getCurrentUserFavorites(state),
    primaryEducation: getCurrentUserPrimaryEducation(state)
  };
}`;

export const formFieldExample =
`class FormLocation extends React.Component {
  render() {
    const { defaultLocations, inputPlaceholder } = this.props;

    return(
      <ReduxFormField name={name} required={required}>
        {({ FormGroup, FieldHint, input, meta }) => (
          <FormGroup meta={meta} validationState={meta}>
            <FieldLabel label={label} required={required} name={name} />
            <MapboxAutosuggest
              defaultLocations={defaultLocations}
              inputPlaceholder={inputPlaceholder}
              onSelect={this.handleLocationChange(input)}
              locationName={input.value.name}
            />
            <FieldHint meta={meta} />
          </FormGroup>
        )}
      </ReduxFormField>
    );
  }
}`;


export const formExample =
`<Form>
  <Form.Text name="firstName" />
  <Form.Text name="lastName" />
  <Form.Location name="hometown" />
  <Form.TextArea name="bio" />

  <Form.Submit>Submit</Form.Submit>
</Form>`;

export const globalStoreWithRequests = `{
  entities: { ... },
  forms: { ... },
  permissions: { ... },
  router: { ... },
  session: { ... },
  requests: {
    "/users/1/career_interests": {
      response: {
        industries: [1, 2],
        locations: [3, 4]
      }
    }
  }
}`;

export const fetchEntityAndStoreRequest =
`export function fetchEntity(entity) {
  return dispatch =>
    http
      .get(entityPath(entity))
      .then(response => {
        const { entities, response } = normalize(
          response[entity.type],
          schemas[pluralize(entity.type)]
        );

        dispatch(insertRequest({ response }));
        dispatch(insertEntities({ entities }));
      });
}`;

export const declarativeDataFetching =
`<Query entities={{ user: { id: 1, type: "User" } }}>
  {({ data }) => (
    if (data.loading) {
      return <Loader />;
    } else if (data.errors) {
      return <QueryError errors={errors} />;
    } else {
      <div>
        Hello {data.user.firstName}!
      </div>
    }
  )}
</Query>`

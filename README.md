# React table exercise

## Installation
You can install this project by running the following commands in the directory where you want to clone the repo:
```
# clone repo
$   git clone https://github.com/abustamantem06/relo-table-exercise.git

# move to the project folder
$   cd relo-table-exercise

# install dependencies
$   npm install

```

## Running the project
The following command runs the app in localhost:3000 by default
```
npm start
```

## Testing
The testing side is conformed by 5 suites, including unit tests and snapshot tests.

### Running tests
Running next command in project folder would run all tests
```
$   npm test
```

Test results should match:
```
Test Suites: 5 passed, 5 total
Tests:       14 passed, 14 total
Snapshots:   6 passed, 6 total
```

## Acceptance criteria
* [x] Create a new React single page application.
- [x] Based on the attached mockup, UI includes filters and table displaying all APIs matching applied filters.
- [x] User can select from the following accepted filter on each parameter (view
below).
    * Auth
    * HTTPS
    * CORS
- [x] Filters are applied when user clicks "Update.
    * Results matching all set filters are displayed in data table.
    * When a filter is not set, it matches all possible values for that parameter.
- [x] The Name, Description, Category, and Link fields should reflect the data returned from the API, with the link opening in a new tab.
- [x] Results should be ordered by name ascending.
- [x] Results should be paginated to not more than 50 results per page; user can
navigate among pages, maintaining sort and applied filters.
- [x] Changing applied filters resets user to first page of results.
- [x] Long descriptions should not impact column width, and should be truncated or
line wrapped when longer than available width.
- [x] Long descriptions should not impact column width, and should be truncated or
line wrapped when longer than available width.

**Bonus**
- [x] Table can be sorted by name, description, category.
- [x] Table can be further filtered by name, description, category.
- [ ] Column widths can be adjusted

## Asumptions
* Version node used when installing and running project and test is compatible with dependencies. If there is a problem when installing dependencies moving to node version 16.13.0 (node version when this was implemented) might solve these problems.
* Name, Description & Category fields for filtering work by filtering data that contain the given string not by looking for a complete match.
* Name, Description & Category filters are applied once "Update" button is clicked.

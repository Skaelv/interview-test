# interview-test

## Install

Clone the repository and install dependencies

```shell
$ git clone https://github.com/Skaelv/interview-test.git
$ npm install
$ grunt
```

## Usage

### Flatten Array 

```shell
$ npm run ex1 [<array>]
```

array(opt) : Array to flatten. Use quotes for the argument. The array will be parsed internally.

### Invite customers to a party

```shell
$ npm run ex2 [<radius> <path> <lon> <lat>]
```

radius(opt, default to 100) : Maximal distance in km to send invitation
path(opt, default to "./customer.json"): Path to list of potentially invited customers file
lon, lat (opt, default to 53.3381985, -6.2592576): GPS coordinates of party

## Tests

```shell
$ grunt test
```

## Author

Antoine Kevin
 ([antoinek@tcd.ie](mailto:antoinek@tcd.ie)) 

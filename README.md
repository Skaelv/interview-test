# interview-test

## Install

Clone the repository and install dependencies

```shell
$ git clone https://github.com/Skaelv/interview-test.git
$ cd interview-test
$ npm install
$ grunt
```

## Usage

### Flatten an array of integers 

```shell
$ npm run ex1 [<array>]
```

* array(opt) : Array to flatten. Don't forget to use quotes as the array will be parsed internally.

The program ignores any non-integer value. e.g.

["string", 2, [-3, 4], [3.8], 9] -> [ 2, -3, 4, 9 ]

### Invite customers to a party

```shell
$ npm run ex2 [<radius> <path> <lat> <lon>]
```

* radius(opt, default to 100) : Maximal distance in km to send the invitation
* path(opt, default to "./customer.json"): Path to list of potentially invited customers local file
* lat, lon (opt, default to 53.3381985, -6.2592576): GPS coordinates of party

## Tests

```shell
$ grunt test
```

## Author

Antoine Kevin
 ([antoinek@tcd.ie](mailto:antoinek@tcd.ie)) 

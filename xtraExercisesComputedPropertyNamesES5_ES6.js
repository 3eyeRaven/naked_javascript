 var listeners = []
undefined
> function listen() {
... }
undefined
> var events = {
... listeners: listeners,
... listen: listen
... }
undefined
> events
{ listeners: [], listen: [Function: listen] }
> 
> var listeners = []
undefined
> function listen() {}
undefined
> var events = { listeners, listen }
undefined
> events
{ listeners: [], listen: [Function: listen] }
> 
> function setEnvelope(type, description) {
... var envelope = {
..... data: {}
..... }
... envelope[type] = description
... return envelope
... }
undefined
> function setEnvelope(type, description) {
... return {
..... data: {},
..... [type]: description
..... }
... }
undefined
> var expertise = 'artist'
undefined
> var person = {
... name: 'Johnny Gill',
... age: 45,
... [expertise]: {
..... gift: ['harmonize', 'sing', 'hum', 'write music', 'compose music', 'performer in the musical arts', 'capture the audiences' heart mind and soul']
gift: ['harmonize', 'sing', 'hum', 'write music', 'compose music', 'performer in the musical arts', 'capture the audiences' heart mind and soul']
                                                                                                                            ^^^^^

SyntaxError: Unexpected identifier

> var expertise = 'artist'
undefined
> var person = {
... name: 'Johnny Gill',
... age: 45,
... [expertise]: {
..... years: 'Since the age of 12',
..... gifts: ['harmony', 'sing', 'hum a tune', 'write music', 'compose music', 'performer in the musical arts', 'knew how to capture the heart and soul of his audience']
..... }
... }
undefined
> function musician(type, description) {
... return: {
return: {
      ^

SyntaxError: Unexpected token :

> function musician(type, description) {
... return {
..... person: {
....... name: 'Johnny Gill',
....... age: 45
....... [type]: 'musical artist'
[type]: 'musical artist'
      ^

SyntaxError: Unexpected token :

> function musician(type, description) {
... return {
..... person: {
....... name: 'Johnny Gill',
....... age: 45
....... [type] = 'musical artist'
....... }
..... }
... }
undefined
> function musician(type, description) {
... var rnbMusician = {
..... person: {
....... name: 'Johnny Gill',
.......   gift: ['harmonize', 'sing', 'hum', 'write music', 'compose music', 'performer in the musical arts', 'capture the audiences' heart mind and soul']
                                                                                                                              ^^^^^

SyntaxError: Unexpected identifier

> return: {
      ^

SyntaxError: Unexpected token :

>     [type]: 'musical artist'
          ^

SyntaxError: Unexpected token :

> 
> function setEnvelope(type, description) P
function setEnvelope(type, description) P
                                        ^

SyntaxError: Unexpected identifier

> function setEnvelope(type, description) {
... var envelope = {
..... data: {}
..... }
... envelope[type] = description
... return envelope
... }
undefined
> function musician(type, description) {
... var rnbMusician = {
..... person: {
....... name: 'Johnny Gill',
....... gift: ['harmonize', 'sing', 'hum', 'write music', 'compose music', 'performer in the musical arts', 'capture the audiences hearts mind and soul']
....... rhythmnBlues[instrument] = 'keyboard' 
rhythmnBlues[instrument] = 'keyboard' 
^^^^^^^^^^^^

SyntaxError: Unexpected identifier

> function musician(instruments, item) {
... var rnbMusician = {
..... person: {
....... 'Alicia Keys',
'Alicia Keys',
             ^

SyntaxError: Unexpected token ,

> function musician(instruments, item) {
... var rnbMusician = {
..... person: {
....... name: 'Alicia Keys',
....... age: 35
....... }
..... rnbMusician[instruments] = 'piano'
rnbMusician[instruments] = 'piano'
^^^^^^^^^^^

SyntaxError: Unexpected identifier

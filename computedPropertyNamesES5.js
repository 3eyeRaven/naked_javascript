
//ES5 syntax
undefined
> var person = {
... name = 'Nick'm
name = 'Nick'm
             ^

> var person = {
... name: 'Jamie St. Patrick',
... age: 44
... }
undefined
> var person = {
... personType: ['businessman', 'Father', 'Best friend', 'Brother', 'Husband', 'Adulterer', 'Gangster', 'chess player', 'planner', 'thinker', 'manipulator', 'employer', 'liar', 'opportunity provider', 'drug dealer', 'club owner']
... }
> var person = {
... name: 'James St. Patrick',
... age: 43
... }
undefined
> var expertise = 'hustler'
undefined
> var person[expertise] = {
var person[expertise] = {
          ^

SyntaxError: Unexpected token [

> person[expertise] = {
... years: 30,
... interests: [''businessman', 'Father', 'Best friend', 'Brother', 'Husband', 'Adulterer', 'Gangster', 'chess player', 'planner', 'thinker', 'manipulator', 'employer', 'liar', 'opportunity provider', 'drug dealer', 'club owner', 'laundrymat owner', 'money launderer']
interests: [''businessman', 'Father', 'Best friend', 'Brother', 'Husband', 'Adulterer', 'Gangster', 'chess player', 'planner', 'thinker', 'manipulator', 'employer', 'liar', 'opportunity provider', 'drug dealer', 'club owner', 'laundrymat owner', 'money launderer']
              ^^^^^^^^^^^

SyntaxError: Unexpected identifier

> person[expertise] = {
... years: 30,
... interests: ['businessman', 'Father', 'Best friend', 'Brother', 'Husband', 'Adulterer', 'Gangster', 'chess player', 'planner', 'thinker', 'manipulator', 'employer', 'liar', 'opportunity provider', 'drug dealer', 'club owner', 'laundrymat owner', 'money launderer']
... }
{ years: 30,
  interests: 
   [ 'businessman',
     'Father',
     'Best friend',
     'Brother',
     'Husband',
     'Adulterer',
     'Gangster',
     'chess player',
     'planner',
     'thinker',
     'manipulator',
     'employer',
     'liar',
     'opportunity provider',
     'drug dealer',
     'club owner',
     'laundrymat owner',
     'money launderer' ] }
> person.hustler
{ years: 30,
  interests: 
   [ 'businessman',
     'Father',
     'Best friend',
     'Brother',
     'Husband',
     'Adulterer',
     'Gangster',
     'chess player',
     'planner',
     'thinker',
     'manipulator',
     'employer',
     'liar',
     'opportunity provider',
     'drug dealer',
     'club owner',
     'laundrymat owner',
     'money launderer' ] }
> 
> person.name
'James St. Patrick'
> person.age
43
> person.hustler
{ years: 30,
  interests: 
   [ 'businessman',
     'Father',
     'Best friend',
     'Brother',
     'Husband',
     'Adulterer',
     'Gangster',
     'chess player',
     'planner',
     'thinker',
     'manipulator',
     'employer',
     'liar',
     'opportunity provider',
     'drug dealer',
     'club owner',
     'laundrymat owner',
     'money launderer' ] }t="robbyrussell"

# MaskerCat - Custom string concatenation mask
Concatenate a set of pre-define or custom character, strings or patterns to an given String, resulting in a mask of characters in the front, back, or both sides of the input.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation
`composer require rvc/maskercat`

## Usage

### Simple masker

`masker (String string, int lenght, int mask, String side);`


Options:

<table>
 <thead>
  <tr> 
   <th>Parameter</th> 
   <th>Values</th>
   <th>Description</th>
   <th>Optional</th>
  </tr>
 </thead> 
<tbody>
  
  <tr>
    <td>string</td>
    <td></td>
    <td>The string to concatenate</td>
    <td>Require</td>
  </tr>

  <tr>
    <td>lenght</td>
    <td>7 <b>(DEFAULT)</b></td>
    <td>Lenght of the mask use to concatenate</td>
    <td>Optional</td>
  </tr>

  <tr>
    <td>mask</td>
    <td>
     <ul>
           <li>0 - abcdefghijklmnopqrstuvwxyz <b>(DEFAULT)</b> </li>
           <li>1 - ABCDEFGHIJKLMNOPQRSTUVWXYZ</li>
           <li>2 - 0123456789abcdefghijklmnopqrstuvwxyz</li>
           <li>3 - 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ</li>
           <li>4 - 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ
                   abcdefghijklmnopqrstuvwxyz
           </li> 
     </ul>
    </td>
    <td>Mask use to concatenate</td>
    <td>Optional</td>
  </tr>

  <tr>
    <td>mask</td>
    <td>
     <ul>
           <li>left <b>(DEFAULT)</b></li>
           <li>right</li>
           <li>both</li>
     </ul>
    </td>
    <td>Side of the string to put the mask</td>
    <td>Optional</td>
  </tr>

</tbody> 
</table>

Example:
  ```
  masker('Hakuna matata');

  output: pgdfbiihakuna matata
  ```

<hr>
 
### Custom masker

`custom_masker (String string, int lenght, String mask, String side)`

Options:

<table>
 <thead>
  <tr> 
   <th>Parameter</th> 
   <th>Values</th>
   <th>Description</th>
   <th>Optional</th>
  </tr>
 </thead> 
<tbody>
  
  <tr>
    <td>string</td>
    <td></td>
    <td>The string to concatenate</td>
    <td>Require</td>
  </tr>

  <tr>
    <td>lenght</td>
    <td></td>
    <td>Lenght of the mask use to concatenate</td>
    <td>Require</td>
  </tr>

  <tr>
    <td>mask</td>
    <td></td>
    <td>Mask use to concatenate</td>
    <td>Require</td>
  </tr>

  <tr>
    <td>side</td>
    <td>
     <ul>
           <li>left <b>(DEFAULT)</b></li>
           <li>right</li>
           <li>both</li>
     </ul>
    </td>
    <td>Side of the string to put the mask</td>
    <td>Optional</td>
  </tr>

</tbody> 
</table>


Example:
```
custom_masker('Hakuna matata', 7, 'abcd453gh', 'right' );

output: `Hakuna matatab5gdccc`
```

## License
MaskerCat is licensed under the MIT License.











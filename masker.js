function masker(string, lenght = 7, mask = 0, side = null){

masquerade = '';
masquerade2 = '';


    switch (mask){

        case 0:
            mask = 'abcdefghijklmnopqrstuvwxyz';
            mask_lenght = 25;
            break;

        case 1:
            mask = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            mask_lenght = 25;
            break;

        case 2:
            mask = '0123456789abcdefghijklmnopqrstuvwxyz';
            mask_lenght = 35;
            break;

        case 3:
            mask = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            mask_lenght = 35;
            break;

        case 4:
            mask = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            mask_lenght = 60;
            break;

        default:
        return 'Error. Expected values are from 0 to 4';

    }

    //Default Maskquing
    for (i = 0; i < lenght; i++){ masquerade += mask[Math.floor(Math.random()*mask_lenght)]; }


    //Siding
    if (side == 'left' || side == null){

        return masquerade+string;

    }else if (side == 'right'){

        return string+masquerade;

    }else if (side == 'both'){

        for (i = 0; i < lenght; i++){ masquerade2 += mask[Math.floor(Math.random()*mask_lenght)]; }

        return masquerade+string+masquerade2;

    }else { return 'Error. Expected values are left, right, both'; }

//End
}


function custom_masker( string, lenght, mask, side = null ){

masquerade = '';
masquerade2 = '';
mask_lenght = string.length-1;


    for (i = 0; i < lenght; i++){ masquerade += mask[Math.floor(Math.random() * mask_lenght)]; }


    //Siding
    if (side == 'left' || side == null){

        return masquerade+string;

    }else if (side == 'right'){

        return string+masquerade;

    }else if (side == 'both'){

        for (i = 0; i < lenght; i++){ masquerade2 += mask[Math.floor(Math.random() * mask_lenght)]; }

        return masquerade+string+masquerade2;
    }


//End
}

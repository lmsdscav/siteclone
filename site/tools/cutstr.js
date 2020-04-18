function cutstr(a, b, c) {
    a = a.split(b);
    var d = '';
    var e = a.length;
    var f = 1;
    for (i = f; i < e; i++) {
        tmp = a[i].split(c);
        if (tmp.length > 1) {
            d += tmp[0];
        }
    }
    return d;
}
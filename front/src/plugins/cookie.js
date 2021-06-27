export default {
  get(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  },

  set(name, value, props) {
    props = props || {};
    var exp = props.expires;
    if (typeof exp == "number" && exp) {
      var d = new Date();
      d.setTime(d.getTime() + exp * 1000);
      exp = props.expires = d;
    }

    if (exp && exp.toUTCString) {
      props.expires = exp.toUTCString();
    }

    value = encodeURIComponent(value);
    var updatedCookie = name + "=" + value;
    for (var propName in props) {
      updatedCookie += "; " + propName;
      var propValue = props[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }
    document.cookie = updatedCookie;
  },

  del(name) {
    this.set(name, null, { expires: -1 });
  },
};

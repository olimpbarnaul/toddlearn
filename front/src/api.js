export default {
  staticURL: process.env.VUE_APP_STATIC_URL || "",
  apiURL: process.env.VUE_APP_API_URL || "",
  slug(entity) {
    return (
      window.location.pathname
        .split("/")
        .filter((v) => !!v)
        .join("-") +
      "-" +
      entity +
      "-" +
      localStorage.username
    );
  },

  async getStatic(address, defValue) {
    return await this.get(`${this.staticURL}/static/${address}.json`, {
      value: defValue,
      slug: address,
    });
  },

  async getUserData(entity, defValue) {
    const slug = this.slug(entity);
    return await this.get(`${this.apiURL}/api/user_data/${slug}/`, {
      value: defValue,
      slug: slug,
      field: "detail",
    });
  },

  async setUserData(entity, value) {
    const slug = this.slug(entity);
    return await this.post(`${this.apiURL}/api/user_data/${slug}/`, {
      value: value,
      slug: slug,
      field: "detail",
    });
  },

  async get(address, { value, slug, field }) {
    let data;
    try {
      const response = await window.axios.get(address);
      data = field ? JSON.parse(response.data[field]) : response.data;
      localStorage.setItem(slug, JSON.stringify(data));
    } catch (e) {
      data = JSON.parse(localStorage.getItem(slug)) || value;
    }
    return data;
  },

  async post(address, { value, slug, field }) {
    const data = {
      slug: slug,
    };
    if (field) data[field] = JSON.stringify(value);
    await window.axios.post(address, data);
    localStorage.setItem(slug, JSON.stringify(value));
  },

  async login(username, password) {
    return window.axios.post(`${this.apiURL}/api/token/login/`, {
      username,
      password,
    });
  },
};

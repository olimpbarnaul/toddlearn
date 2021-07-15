export default {
  baseURL: process.env.VUE_APP_API_URL || "",
  payload: {
    headers: {
      Authorization: `Token ${localStorage.authToken}`,
      "Content-Type": "application/json",
    },
  },

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

  async getStatic(entity, defValue) {
    const slug = [
      window.location.pathname.split("/")[1],
      entity,
      localStorage.username,
    ];

    return await this.fetchGet(`/static/${slug.join("/")}.json`, {
      value: defValue,
      slug: slug.join("-"),
      json: true,
    });
  },

  async get(entity, defValue) {
    const slug = this.slug(entity);
    return await this.fetchGet(`${this.baseURL}/api/user_data/${slug}/`, {
      value: defValue,
      slug: slug,
    });
  },

  async set(entity, value) {
    const slug = this.slug(entity);
    return await this.fetchSet(`${this.baseURL}/api/user_data/${slug}/`, {
      value: value,
      slug: slug,
    });
  },

  async fetchGet(address, { value, slug, json }) {
    this.payload.method = "GET";
    this.payload.body = null;
    const response = await fetch(address, this.payload);
    let data;
    try {
      data = await response.json();
      if (!json) data = JSON.parse(data.detail);
      localStorage.setItem(slug, JSON.stringify(data));
    } catch (e) {
      data = JSON.parse(localStorage.getItem(slug)) || value;
    }
    return data;
  },

  async fetchSet(address, { value, slug }) {
    this.payload.method = "POST";
    this.payload.body = JSON.stringify({
      slug: slug,
      detail: JSON.stringify(value),
    });

    await fetch(address, this.payload);
    localStorage.setItem(slug, JSON.stringify(value));
  },
};

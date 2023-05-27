<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default {
  name: "Dashboard",
  data() {
    return {
      links: [],
      db: null,
    };
  },
  created() {
    this.db = getFirestore();
  },
  mounted() {
    this.fetchLinks();
  },
  methods: {
    async fetchLinks() {
      try {
        const querySnapshot = await getDocs(collection(this.db, "links"));
        const links = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const createdAt =
            data.createdAt && data.createdAt.toDate
              ? data.createdAt.toDate()
              : null;
          const formattedCreatedAt = createdAt
            ? `${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`
            : null;
          return {
            id: doc.id,
            longUrl: data.longUrl, //Fetch the long url
            shortUrl: data.shortUrl, //Fetch the short URL
            createdAt: formattedCreatedAt, // Fetch the Date-Time information
            ip: data.ip, // Fetch the IP information
          };
        });
        console.log(links); // Logged here the fetched links for testing
        this.links = links;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <div class="dashboard">
    <table class="link-table">
      <thead>
        <tr>
          <th class="header-cell">Uzun URL</th>
          <th class="header-cell">Kısa URL</th>
          <th class="header-cell">Gün-Saat</th>
          <th class="header-cell">IP Adresi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="link in links" :key="link.id">
          <td class="data-cell long-url-cell">
            <a :href="link.shortUrl" target="_blank">{{ link.longUrl }}</a>
          </td>
          <td class="data-cell short-url-cell">
            <a :href="link.shortUrl" target="_blank">{{ link.shortUrl }}</a>
          </td>
          <td class="data-cell">{{ link.createdAt }}</td>
          <td class="data-cell">{{ link.ip }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
}

.link-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  border-top: 1px solid #ddd;
}

.link-table tr {
  border-bottom: 1px solid #ddd;
}

.link-table .header-cell,
.link-table .data-cell {
  padding: 1rem;
  text-align: center;
}

.long-url-cell {
  max-width: 60%;
  word-break: break-all;
}

.short-url-cell {
  max-width: 40%;
  word-break: break-all;
}

@media (max-width: 576px) {
  .link-table {
    display: block;
  }

  .link-table tr {
    display: block;
    margin-bottom: 0.5rem;
  }

  .link-table .header-cell,
  .link-table .data-cell {
    display: block;
    padding: 0.5rem;
  }

  .long-url-cell,
  .short-url-cell {
    max-width: 100%;
  }
}
</style>

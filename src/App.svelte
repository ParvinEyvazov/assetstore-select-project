<script>
  import "@material/mwc-icon";
  import "@material/mwc-icon-button";
  import "@material/mwc-list/mwc-list-item";
  import "@material/mwc-linear-progress";
  import "@material/mwc-menu";
  import jwtdecode from "jwt-decode";
  import { get_current_component } from "svelte/internal";
  import { createEventDispatcher } from "svelte";

  const currentComponent = get_current_component();
  const dispatch = createEventDispatcher();

  let token;
  let apiKey;
  let projects;
  let user;

  function url(path) {
    return "https://hq.spicaengine.com/api" + path;
  }

  //frame function
  function onIframeReady(event) {
    const iframe = event.path[0];
    window.addEventListener("message", ({ origin, data }) => {
      if (origin != window.origin) {
        const { key, authorization } = data;
        token = authorization;
        apiKey = key;
        if (token) {
          user = jwtdecode(token);
          user._id = jwtdecode(token, { header: true })._id;
        }

        fetchServers();
      }
    });
    iframe.contentWindow.postMessage("exchange", url(""));
  }

  //fetch servers
  function fetchServers() {
    if (token) {
      const filter = {
        $and: [
          { "user._id": user._id },
          { $or: [{ status: "active" }, { status: "expired" }] },
          { package_code: { $nin: ["on_premise"] } },
        ],
      };
      projects = fetch(
        url(
          "/bucket/5dd912440566406ec8f0d756/data?relation=true&filter=" +
            JSON.stringify(filter)
        ),
        { headers: { Authorization: "APIKEY " + apiKey } }
      ).then((r) => r.json());
    } else {
      projects = undefined;
    }
  }

  function selectProject(project) {
    // console.log("selected poject: ", project);
    dispatch("serverSelected", { _id: project._id });
    if (currentComponent.dispatchEvent) {
      currentComponent.dispatchEvent(
        new CustomEvent("serverSelected", { detail: { _id: project._id } })
      );
    }
  }
</script>

<style>
  .title {
    text-align: center;
  }

  .card {
    transition: 0.5s;
    cursor: pointer;
    margin: auto;
    width: 80%;
    height: 100px;
    border: 0.5px solid rgba(164, 204, 243, 0.63);
    border-radius: 25px;
    display: flex;
    margin-bottom: 25px;
  }

  .info {
    /* background: lightgreen; */
    width: 70%;
    margin: auto;
  }

  .button-part {
    width: 30%;
  }

  span {
    display: block;
  }

  .info {
    /* //background: red; */
    padding: 15px;
  }

  .project-name {
    font-size: 25px;
  }

  .project-id {
    font-size: 10px;
  }

  .button-part .button {
    transition: 0.35s;
    position: relative;
    top: 50%;
    left: 15%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 0px solid lightslategrey;
    width: 10vw;
    height: 10vw;
    max-width: 50px;
    max-height: 50px;
    cursor: pointer;
    padding: auto;
    margin: auto;
  }


  .card:hover .button-part .button{
    background: rgba(164, 204, 243, 0.63);
  }

  .card:hover{
    background: rgba(236, 235, 235, 0.336);
  }

  .button-part .button span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
  }

  .frame {
    display: none;
  }

  .auth_title {
    text-align: center;
  }

  /* LOADING CSS */
  .lds-ring {
    position: relative;
    left: 50%;
    transform: translate(-50%, 50%);
    margin: auto;
    text-align: center;
    display: inline-block;
    position: relative;
    width: 60px;
    height: 60px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    margin: 8px;
    border: 5px solid #1abde7;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #1abde7 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
<iframe
  class="frame"
  title="Spica HeadQuarters FIM"
  src={url('/fn-execute/v1/state')}
  on:load={onIframeReady} />

{#if token != null}
  <h1 class="title">Select one of your Spica projects</h1>
  <div class="page">
    {#await projects}
      <!-- LOAIDING -->

      <div class="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    {:then projects}
      {#if !projects.length}
        <h1>You have no project</h1>
      {/if}

      {#each projects as project}
        <div class="card"  on:click={selectProject(project)}>
          <div class="info">
            <span class="project-name">{project.project_name}</span>

            <span class="project-id">licence id:
              {project.license_id}</span>
          </div>

          <div class="button-part">
            <div class="button">
              <span> <i class="fa fa-angle-right" style='font-size:36px'/> </span>
            </div>
          </div>
        </div>
      {/each}
    {:catch error}
      {error.message}
    {/await}
  </div>
{:else}
  <h1 class="auth_title">Authenticating... Please wait!</h1>
{/if}
<svelte:options tag="server-selection" immutable={true} />

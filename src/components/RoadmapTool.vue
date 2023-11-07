<template>
  <!-- Project Configuration-->
  <div class="min-h-full">
    <div class="rounded-lg bg-white shadow-sm mx-auto max-w-7xl sm:px-6 sm:py-4 lg:px-8 lg:py-6 my-6">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h2 class="text-base font-semibold leading-6 text-gray-900">Laying Out The Work&hellip;</h2>
          <p class="mt-2 text-sm text-gray-700">Aggregate a list of all Epics which paint a clear path to the project's definition of done. For each Epic, provide a SWAG, which will then yield a standardized Points estimate</p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button type="button" class="block rounded-md bg-ally-plum px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-ally-plum-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ally-plum">Add Epic</button>
        </div>
      </div>
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"><span class="sr-only">Priority</span></th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Epic Name</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">SWAG</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Points (low)</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Points (high)</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="epic in epics" :key="epic.email">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6"><Bars4Icon class="h-6 w-6" aria-hidden="true" /></td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">{{ epic.name }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <Listbox as="div" v-model="selectedSwag">
                        <ListboxLabel class="sr-only">Assigned to</ListboxLabel>
                        <div class="relative mt-2">
                          <ListboxButton class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-ally-plum sm:text-sm sm:leading-6">
                            <span class="block truncate">{{ selectedSwag.name }}</span>
                            <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                          </ListboxButton>

                          <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                            <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              <ListboxOption as="template" v-for="swag in swags" :key="swag.id" :value="swag" v-slot="{ active, selected }">
                                <li :class="[active ? 'bg-ally-plum-light text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                                  <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ swag.name }}</span>

                                  <span v-if="selected" :class="[active ? 'text-white' : 'text-ally-plum-light', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                  </span>
                                </li>
                              </ListboxOption>
                            </ListboxOptions>
                          </transition>
                        </div>
                      </Listbox>
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ POINTS LOW }</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ POINTS HIGH }</td>
                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a href="#" class="text-ally-plum-light hover:text-ally-plum px-3 py-1.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ally-plum">
                        Edit<span class="sr-only">, {{ epic.name }}</span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / Project Configuration-->

    <!-- Team Configuration -->
    <div class="rounded-lg bg-white shadow-sm mx-auto max-w-7xl sm:px-6 sm:py-4 lg:px-8 lg:py-6 my-6">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h2 class="text-base font-semibold leading-6 text-gray-900">Budgeting Team Capacity&hellip;</h2>
          <p class="mt-2 text-sm text-gray-700">Showcasing a list of the contributing team members. Add the average sprint velocity for each, along with the percent of their focus that will be budgeted for working on this project. Once added, their point capacity will be provided to budget projections from. This value is automatically used in SWAG projections further below.</p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button type="button" class="block rounded-md bg-ally-plum px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-ally-plum-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ally-plum">Add Member</button>
        </div>
      </div>
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Team Member</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Sprint Velocity</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Project Focus</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Capacity Per Sprint</th>
                  <th scope="col" class="py-3.5 pl-3 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="member in teamMembers" :key="member.title">
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="font-medium text-gray-900">{{ member.name }}</div>
                    <div class="mt-1 text-gray-500">{{ member.title }}</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <label for="personalVelocity" class="sr-only">Sprint</label>
                    <input type="number" min="0" name="personalVelocity" id="personalVelocity" autocomplete="off" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ally-plum-light sm:text-sm sm:leading-6" placeholder="pts" />
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <label for="personalFocus" class="sr-only">Project Focus</label>
                    <input type="number" min="0" max="100" name="personalFocus" id="personalFocus" autocomplete="off" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ally-plum-light sm:text-sm sm:leading-6" placeholder="%" />
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    { POINTS }
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-right font-semibold text-gray-900">
                    <a href="#" class="text-ally-plum-light hover:text-ally-plum px-3 py-1.5 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ally-plum">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- / Team Configuration-->

  <!-- Roadmap Projection-->
  <div class="min-h-full">
    <div class="rounded-lg bg-white shadow-sm mx-auto max-w-7xl sm:px-6 sm:py-4 lg:px-8 lg:py-6 my-6">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h2 class="text-base font-semibold leading-6 text-gray-900">Results Are In&hellip;</h2>
          <p class="mt-2 text-sm text-gray-700">Based on the information you've entered above, the following are delivery projection ranges based on low, median, and high SWAG estimates. These projection ranges are intended to provide a early ballpark timing for roadmap planning and prioritization of effort via data-driven, low confidence date range estimates.</p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button type="button" class="block rounded-md bg-ally-plum px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-ally-plum-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ally-plum">View Calculations</button>
        </div>
      </div>
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Low</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Median</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">High</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div class="font-medium text-gray-900">{ SPRINT END DATE }</div>
                      <div class="mt-1 text-gray-500">{ SPRINT NUMBER }</div>
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div class="font-medium text-gray-900">{ SPRINT END DATE }</div>
                      <div class="mt-1 text-gray-500">{ SPRINT NUMBER }</div>
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div class="font-medium text-gray-900">{ SPRINT END DATE }</div>
                      <div class="mt-1 text-gray-500">{ SPRINT NUMBER }</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- / Roadmap Projection-->
</template>

<script setup>
  import { ref } from 'vue'
  import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
  import { Bars4Icon, CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

  const epics = [
    {
      name: 'A Long-expected Party',
    },
    {
      name: 'The Breaking of the Fellowship',
    },
    {
      name: 'The White Rider',
    },
    {
      name: 'The Black Gate Opens',
    },
    {
      name: 'The Grey Havens',
    },
  ]

  const swags = [
    { id: 1, name: 'XS' },
    { id: 2, name: 'SM' },
    { id: 3, name: 'MD' },
    { id: 4, name: 'LG' },
    { id: 5, name: 'XL' },
  ]

  const selectedSwag = ref(swags[3])

  const teamMembers = [
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
    },
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
    },
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
    },
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
    },
  ]
</script>
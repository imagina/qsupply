<template>
	<div>
		<!-- tasks -->
		<div class="q-px-md">
			<dynamicList ref="dynamicList" :listConfig="listConfig" @new="() => $refs.crudComponent.create()">
			</dynamicList>
		</div>

		<!-- crud form -->
		<crud ref="crudComponent" :type="null" :crud-data="import('modules/qtask/_crud/tasks')"
			@created="refreshDynamicList()" @updated="refreshDynamicList()" @deleted="refreshDynamicList()" />

		<inner-loading :visible="loading" />
	</div>
</template>
<script>
//Components
import dynamicList from 'modules/qsite/_components/master/dynamicList';

export default {
	props: {},
	components: {
		dynamicList
	},
	watch: {},
	mounted() {
		this.$nextTick(function () {
			//this.init()
		});
	},
	data() {
		return {
			selectedRow: {
				timeLogsModal: false,
				showModal: false,
				row: null
			},
			loading: false,
			listConfig: {
				apiRoute: 'apiRoutes.qtask.tasks',
				permission: '',
				pageActions: {
					extraActions: ['search', 'new']
				},
				read: {
					title: this.$tr('isupply.cms.orders'),
					tableProps: {
					},
					columns: [
						{
							name: 'id', label: this.$tr('isite.cms.form.id'), field: 'id', style: '',
							onClick: (val, row) => this.openShowModal(row)
						},
						{
							name: 'title', label: this.$tr('isite.cms.form.title'), field: 'title',
							align: 'rigth', style: 'max-width: 250px',
							onClick: (val, row) => this.openShowModal(row)
						},


						{
							name: 'actions', label: this.$tr('isite.cms.form.actions'),
							align: 'center'
						}
					],
					requestParams: {},
					filters: {

					},

					help: {
						title: this.$tr('isupply.cms.orders'),
						description: this.$tr('isupply.cms.orders')
					}

				},
				actions: [
					{//show action
						icon: 'fa-light fa-eye',
						name: 'edit',
						label: this.$tr('isite.cms.label.show'),
						action: (item) => {
							this.onUpdate(item);
						}
					},
					{//Edit action
						icon: 'fa-light fa-pencil',
						name: 'edit',
						label: this.$tr('isite.cms.label.edit'),
						action: (item) => {
							this.onUpdate(item);
						}
					},
					{//Delete action
						icon: 'fa-light fa-trash-can',
						name: 'delete',
						label: this.$tr('isite.cms.label.delete'),
						action: (item) => {
							this.onDelete(item);
						}
					}
				]
			}
		};
	},
	computed: {},
	methods: {
		init() {
		},
		refreshDynamicList() {
			this.selectedRow.showModal = false;
			this.selectedRow.row = null;
			this.$refs.dynamicList.getData({ page: 1 }, true);
		},

		async reloadRow(row) {
			const newRow = await this.$refs.dynamicList.reloadRow(row);
			this.selectedRow.row = newRow;
		},
		openShowModal(row) {
			this.selectedRow.row = row;
			this.selectedRow.showModal = true;
		},
		onUpdate(row) {
			this.$refs.crudComponent.update(row);
		},
		onDelete(row) {
			this.$refs.crudComponent.delete(row);
		}
	}
};
</script>
<style lang="scss">
.padding-none {
	padding: 0px !important;
}
</style>

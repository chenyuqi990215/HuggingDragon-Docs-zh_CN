Search.setIndex({"docnames": ["advanced/config", "advanced/network", "advanced/task", "advanced/tips", "basic_tutorials/config", "basic_tutorials/preprocess", "basic_tutorials/road_network", "basic_tutorials/trajectory", "get_started/download", "get_started/install", "get_started/quick_start", "get_started/structure", "index", "locale/.doctrees/nbsphinx/visualization/trajectory_recovery", "task/task", "task/trajrec", "visualization/trajectory_recovery"], "filenames": ["advanced/config.rst", "advanced/network.rst", "advanced/task.rst", "advanced/tips.rst", "basic_tutorials/config.rst", "basic_tutorials/preprocess.rst", "basic_tutorials/road_network.rst", "basic_tutorials/trajectory.rst", "get_started/download.rst", "get_started/install.rst", "get_started/quick_start.rst", "get_started/structure.rst", "index.rst", "locale/.doctrees/nbsphinx/visualization/trajectory_recovery.ipynb", "task/task.rst", "task/trajrec.rst", "visualization/trajectory_recovery.ipynb"], "titles": ["Writing a Config File", "Customize Network", "Customize Task", "Tips for Coding", "Config Settings", "Trajectory Preprocess", "Creating a Road Network", "Creating a Trajectory Dataset", "Download Datasets from Google Drive", "Advanced Installation", "Quick Start", "Project Structure", "HuggingDragon\u2019s Document", "Visualization of Trajectory Recovery", "Task Supports", "Task: Trajectory Recovery", "Visualization of Trajectory Recovery"], "terms": {"For": [3, 6, 7, 8], "research": [3, 6, 8, 12, 14], "who": 3, "want": [3, 6, 10], "us": [3, 6, 7, 8, 10, 12, 13, 16], "our": [3, 6, 12], "framework": [3, 6, 12, 14], "ar": [3, 12, 15], "familiar": 3, "utilsd": 3, "tool": [3, 6, 12], "we": [3, 5, 6, 8, 10, 13, 16], "provid": [3, 5, 6, 8, 10, 12, 14], "sever": 3, "befor": [3, 7, 10], "you": [3, 6, 7, 10], "start": [3, 6, 8], "read": 3, "tutori": [3, 5, 6, 10, 13, 16], "pleas": [3, 6, 7, 8, 10, 12], "first": [3, 7, 13, 16], "take": 3, "some": 3, "time": [3, 14, 15], "document": 3, "The": [4, 6, 7, 8, 10, 14], "experi": [4, 5, 14], "i": [4, 6, 7, 8, 10, 12, 13, 16], "determin": 4, "three": [4, 8], "aspect": 4, "pass": 4, "yaml": [4, 10, 13, 16], "style": 4, "through": [4, 10], "train": [4, 5, 6, 7, 10], "entri": [4, 10], "model": [4, 10, 12, 14], "modul": 4, "other": 4, "higher": 4, "overrid": 4, "same": 4, "name": [4, 6], "lower": 4, "In": [5, 6, 10, 13, 16], "thi": [5, 6, 8, 10, 13, 14, 16], "show": [5, 6, 13, 16], "how": [5, 6], "gener": [5, 6, 8, 13, 14, 16], "specif": [5, 6, 8, 15], "dataset": [5, 6, 10, 12], "ha": 5, "follow": [5, 6, 7, 10, 12, 14], "format": 5, "root": [5, 6], "train_input": 5, "txt": [5, 6, 7, 8], "train_output": 5, "valid": [5, 12], "valid_input": 5, "valid_output": 5, "test": 5, "test_input": 5, "test_output": 5, "To": [5, 6, 7, 8, 12, 14], "sampl": [5, 14, 15], "from": [5, 10, 12, 13, 14, 15, 16], "raw": [5, 7, 15], "run": [5, 6, 7, 10], "python": [5, 6, 7, 8, 10, 12], "m": [5, 6, 7, 8, 10], "script": [5, 6, 7, 8], "trajrec": 5, "map_root": [5, 7], "zone_rang": [5, 7], "traj_path": [5, 7], "epsilon": 5, "sample_interv": 5, "min_tim": 5, "max_tim": 5, "ratio": 5, "dowmsample_ratio": 5, "save_root": 5, "porto": [5, 7, 8, 10], "data": [5, 6, 8, 10, 14], "road_network": [5, 6, 7], "41": [5, 7, 13, 16], "111975": 5, "8": [5, 7, 10, 12, 13, 16], "667057": 5, "177462": 5, "585305": 5, "15": [5, 13, 16], "600": 5, "1200": 5, "specifi": [5, 6, 7], "interv": 5, "target": 5, "downsampl": 5, "rate": [5, 14, 15], "when": 5, "onli": [5, 6, 12], "12": 5, "5": [5, 13, 16], "gp": [5, 15], "point": [5, 6, 14, 15], "save": [5, 10, 13, 16], "easi": 5, "reproduc": [5, 8, 12], "result": [5, 8, 10, 12], "your": [6, 10], "own": 6, "suggest": 6, "put": [6, 8, 10], "under": [6, 8, 10], "nodeosm": 6, "edgeosm": 6, "waytypeosm": 6, "poiosm": 6, "option": [6, 7], "contain": [6, 8], "relat": [6, 12], "node": 6, "where": 6, "each": [6, 7, 15], "line": [6, 13, 16], "id": [6, 7], "latitud": 6, "longitud": 6, "an": [6, 8, 10, 12], "intersect": 6, "edg": 6, "segment": 6, "end": 6, "coordin": 6, "make": [6, 8, 10, 12], "up": [6, 8, 10], "type": 6, "wai": 6, "interest": [6, 14], "openstreetmap": 6, "osm": 6, "collabor": 6, "project": 6, "aim": [6, 14, 15], "free": 6, "edit": 6, "world": 6, "It": [6, 8], "access": 6, "platform": 6, "individu": 6, "organ": 6, "contribut": [6, 12], "geograph": 6, "includ": [6, 14, 15], "build": [6, 7], "landmark": 6, "wide": 6, "variou": [6, 12], "applic": [6, 12, 14, 15], "develop": [6, 12], "navig": [6, 14], "spatial": [6, 15], "analysi": [6, 12, 14], "purpos": [6, 8, 12], "new": [6, 8, 12], "websit": [6, 8], "step": [6, 10, 12], "1": [6, 7, 10, 15], "2": [6, 7, 10], "step3": 6, "4": 6, "download": [6, 10, 13, 16], "desir": 6, "area": 6, "geofabrik": 6, "pbf": 6, "pre": 6, "process": [6, 7, 13, 16], "differ": 6, "region": 6, "countri": 6, "easier": 6, "obtain": [6, 15], "need": [6, 12], "osm2rn": 6, "power": 6, "softwar": 6, "util": 6, "design": [6, 12], "instal": [6, 10], "command": [6, 7, 12], "git": [6, 12], "clone": [6, 12], "http": [6, 12], "github": [6, 12], "com": [6, 12], "sjruan": 6, "cd": [6, 7, 12], "requir": 6, "note": [6, 8], "successfulli": 6, "gdal": 6, "instead": 6, "recommend": [6, 14], "remov": 6, "conda": 6, "forg": 6, "default": [6, 10], "channel": 6, "issu": 6, "clip": 6, "accord": 6, "osm_clip": 6, "py": [6, 12], "input_path": [6, 7, 8], "asia": 6, "latest": 6, "output_path": [6, 7, 8], "interest_region": 6, "min_lat": 6, "min_lng": 6, "max_lat": 6, "max_lng": 6, "path": 6, "input": [6, 13, 15, 16], "output": [6, 10], "minimum": 6, "valu": 6, "maximum": 6, "sure": [6, 8, 10, 12], "replac": 6, "appropri": 6, "scipt": 6, "store": 6, "final": 6, "preprocess": [6, 8], "phase": 6, "modifi": [6, 10], "filenam": 6, "previou": 6, "enabl": [6, 12, 14], "inform": [6, 7, 8], "about": [6, 8], "locat": [6, 14, 15], "restaur": 6, "bank": 6, "park": 6, "By": [6, 12], "leverag": 6, "rich": 6, "geospati": 6, "valuabl": [6, 14], "insight": [6, 14], "decis": 6, "3": [6, 10, 12], "osmosi": 6, "manipul": 6, "allow": [6, 12, 14], "user": [6, 14], "perform": 6, "oper": 6, "filter": 6, "merg": 6, "transform": [6, 15], "meet": 6, "wget": 6, "releas": 6, "0": [6, 13, 16], "48": 6, "tgz": 6, "mkdir": [6, 10], "mv": 6, "tar": 6, "xvfz": 6, "rm": 6, "chmod": 6, "x": 6, "bin": 6, "rbf": 6, "nk": 6, "keylist": 6, "amen": 6, "wx": 6, "ensur": [6, 12], "java": 6, "osm2poi": 6, "xml": 6, "dictionari": 6, "categori": 6, "label": 6, "sourc": [6, 12], "librari": 6, "bigsciti": 6, "group": 6, "comprehens": [6, 12, 14], "urban": 6, "comput": 6, "transport": [6, 12, 14], "trajectori": [6, 12, 14], "rn_prefix": 6, "output_rn_path": 6, "traj_prefix": 6, "output_traj_path": 6, "prefix": 6, "instanc": [6, 7], "beij": [6, 8], "link": [6, 10], "bj_roadmap_edg": 6, "traj_bj_11": 6, "abov": [6, 7, 8], "simultan": 6, "task": [6, 8, 10, 12, 13, 16], "rn": 6, "simpl": 7, "repres": [7, 13, 16], "timestamp": 7, "lat": 7, "lon": 7, "rid": 7, "n": 7, "cnt": 7, "without": 7, "can": [7, 10, 12], "extra": [7, 13, 16], "like": 7, "uid": 7, "hmm": 7, "tmp_path": 7, "should": 7, "c": 7, "file": [7, 10, 13, 16], "g": 7, "cpp": 7, "o": 7, "csv": 7, "08": 7, "69": 7, "27": 7, "40": 7, "tmp": 7, "them": 8, "folder": 8, "mention": 8, "mai": 8, "most": [8, 14], "date": 8, "version": [8, 10, 12], "sole": 8, "shown": 8, "repositori": 8, "t": 8, "taxi": 8, "open": 8, "avail": 8, "kaggl": 8, "map": [8, 15], "match": [8, 15], "also": [8, 14], "code": [8, 12], "microsoft": 8, "ride": 8, "tdrive": 8, "libciti": 8, "more": [8, 14], "see": 8, "recoveri": [8, 12, 14], "quick": 8, "here": 8, "walk": 10, "exampl": 10, "huggingdragon": [10, 13, 14, 16], "have": 10, "set": [10, 14], "machin": 10, "mtrajrec": [10, 13, 16], "creat": [10, 12, 13, 16], "directori": 10, "p": [10, 13, 16], "mtrajrec_porto": [10, 13, 16], "train_trajectory_recoveri": 10, "config": [10, 13, 16], "trajectory_recoveri": 10, "yml": 10, "paramet": [10, 13, 16], "If": 10, "chang": 10, "online_features_flag": 10, "fals": [10, 13, 16], "true": [10, 13, 16], "do": 10, "mtrajrec_porto_online_features_flag": 10, "flag": 10, "runtim": [10, 13, 16], "output_dir": 10, "advanc": [12, 14], "unifi": [12, 14], "revolution": 12, "base": [12, 14], "within": 12, "realm": 12, "intellig": [12, 14], "system": 12, "ITS": [12, 14], "object": 12, "offer": [12, 14], "robust": 12, "experiment": 12, "conveni": 12, "facilit": [12, 14], "explor": 12, "implement": 12, "all": 12, "checkpoint": [12, 13, 16], "current": [12, 14], "proce": 12, "environ": 12, "execut": 12, "chenyuqi990215": 12, "setup": 12, "integr": 12, "multipl": 12, "central": 12, "solut": [12, 14], "extens": 12, "easili": 12, "incorpor": [12, 14], "algorithm": [12, 15], "foster": 12, "flexibl": 12, "adapt": 12, "evolv": 12, "support": 12, "essenti": [12, 15], "similar": [12, 14, 15], "effect": [12, 14, 15], "comparison": [12, 14], "systemat": 12, "pipelin": 12, "encompass": 12, "necessari": 12, "compon": 12, "structur": 12, "effici": 12, "workflow": 12, "standard": 12, "emphas": 12, "field": [12, 14], "consist": 12, "compar": 12, "find": [12, 14], "kei": 14, "focus": 14, "recov": [13, 14, 15, 16], "miss": [14, 15], "given": [14, 15], "low": [14, 15], "reconstruct": 14, "complet": 14, "among": 14, "intend": 14, "expand": 14, "its": 14, "capabl": 14, "addit": 14, "futur": 14, "These": 14, "plan": 14, "rout": 14, "represent": 14, "learn": 14, "rrl": 14, "self": 14, "supervis": 14, "manner": 14, "enhanc": [14, 15], "understand": 14, "estim": [14, 15], "arriv": 14, "eta": 14, "predict": [13, 14, 15, 16], "travel": [14, 15], "optim": 14, "abil": 14, "densiti": 14, "pattern": 14, "next": [13, 14, 16], "poi": 14, "": 14, "histori": 14, "person": 14, "servic": 14, "traffic": [14, 15], "signal": 14, "control": 14, "histor": 14, "driven": 14, "manag": 14, "flow": 14, "With": 14, "aspir": 14, "empow": 14, "practition": 14, "address": 14, "critic": 14, "challeng": [14, 15], "drive": [13, 14, 16], "foundat": 15, "measur": 15, "howev": 15, "real": 15, "life": 15, "often": 15, "suffer": 15, "limit": 15, "addition": 15, "exist": 15, "face": 15, "increas": 15, "fill": 15, "enrich": 15, "error": 15, "infer": 15, "onto": 15, "road": 15, "network": [13, 15, 16], "move": 15, "chen": 15, "yuqi": 15, "et": 15, "al": 15, "rntrajrec": 15, "tempor": 15, "arxiv": 15, "preprint": 15, "2211": 15, "13234": 15, "2022": 15, "ipython": [13, 16], "displai": [13, 16], "ifram": [13, 16], "trajrecvisu": [13, 16], "numpi": [13, 16], "np": [13, 16], "googl": [13, 16], "configur": [13, 16], "from_pretrain": [13, 16], "encod": [13, 16], "pred_out": [13, 16], "linear": [13, 16], "in_featur": [13, 16], "128": [13, 16], "out_featur": [13, 16], "bia": [13, 16], "gru": [13, 16], "extramlp": [13, 16], "fc_out": [13, 16], "25": [13, 16], "fc_hid": [13, 16], "136": [13, 16], "decod": [13, 16], "decodermulti": [13, 16], "emb_id": [13, 16], "embed": [13, 16], "12614": [13, 16], "tandem_fc": [13, 16], "sequenti": [13, 16], "256": [13, 16], "relu": [13, 16], "attn": [13, 16], "attent": [13, 16], "v": [13, 16], "rnn": [13, 16], "257": [13, 16], "fc_id_out": [13, 16], "fc_rate_out": [13, 16], "dropout": [13, 16], "inplac": [13, 16], "forward": [13, 16], "traj": [13, 16], "1390819844": [13, 16], "16695400": [13, 16], "62677000": [13, 16], "1390819964": [13, 16], "16691800": [13, 16], "62520400": [13, 16], "1390820084": [13, 16], "16250800": [13, 16], "62479000": [13, 16], "1390820204": [13, 16], "15583000": [13, 16], "62299900": [13, 16], "1390820324": [13, 16], "15425500": [13, 16], "61359400": [13, 16], "1390820444": [13, 16], "15027700": [13, 16], "61271200": [13, 16], "1390820564": [13, 16], "14732500": [13, 16], "61568200": [13, 16], "1390820684": [13, 16], "14723500": [13, 16], "61750000": [13, 16], "get_predict": [13, 16], "time_interv": [13, 16], "folium": [13, 16], "well": [13, 16], "orang": [13, 16], "star": [13, 16], "while": [13, 16], "purpl": [13, 16], "get_visu": [13, 16], "arrai": [13, 16], "html": [13, 16], "6": [13, 16], "src": [13, 16], "width": [13, 16], "500": [13, 16], "height": [13, 16], "300": [13, 16]}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"write": 0, "config": [0, 4], "file": [0, 4, 6], "custom": [1, 2], "network": [1, 6, 8], "task": [2, 5, 14, 15], "tip": 3, "code": 3, "set": 4, "paramet": 4, "prioriti": 4, "user": 4, "defin": 4, "configur": 4, "command": 4, "line": 4, "default": 4, "trajectori": [5, 7, 8, 10, 13, 15, 16], "preprocess": 5, "recoveri": [5, 10, 13, 15, 16], "creat": [6, 7], "road": [6, 8], "structur": [6, 11], "from": [6, 8], "open": 6, "street": 6, "map": [6, 7], "extract": 6, "extra": 6, "poi": 6, "featur": [6, 12], "convert": 6, "libciti": 6, "format": [6, 7], "dataset": [7, 8], "data": 7, "perform": 7, "match": 7, "download": 8, "googl": 8, "drive": 8, "process": 8, "raw": 8, "advanc": 9, "instal": [9, 12], "quick": 10, "start": 10, "prerequisit": 10, "project": 11, "huggingdragon": 12, "": 12, "document": 12, "fast": 12, "support": 14, "introduct": 15, "formal": 15, "definit": 15, "citat": 15, "visual": [13, 16], "step": [13, 16], "1": [13, 16], "import": [13, 16], "necessari": [13, 16], "packag": [13, 16], "2": [13, 16], "load": [13, 16], "pretrain": [13, 16], "model": [13, 16], "3": [13, 16], "obtain": [13, 16], "output": [13, 16], "4": [13, 16]}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "nbsphinx": 4, "sphinx.ext.viewcode": 1, "sphinx": 57}, "alltitles": {"Writing a Config File": [[0, "writing-a-config-file"]], "Customize Network": [[1, "customize-network"]], "Customize Task": [[2, "customize-task"]], "Tips for Coding": [[3, "tips-for-coding"]], "Config Settings": [[4, "config-settings"]], "Parameter Priority": [[4, "parameter-priority"]], "User-defined Configuration File": [[4, "user-defined-configuration-file"]], "Command Line Parameters": [[4, "command-line-parameters"]], "Default Configuration": [[4, "default-configuration"]], "Trajectory Preprocess": [[5, "trajectory-preprocess"]], "Trajectory Recovery task": [[5, "trajectory-recovery-task"]], "Creating a Road Network": [[6, "creating-a-road-network"]], "File Structure of Road Network": [[6, "file-structure-of-road-network"]], "Create From Open Street Map": [[6, "create-from-open-street-map"]], "Extract Extra POI features": [[6, "extract-extra-poi-features"]], "Convert from Libcity Format": [[6, "convert-from-libcity-format"]], "Creating a Trajectory Dataset": [[7, "creating-a-trajectory-dataset"]], "Data Format": [[7, "data-format"]], "Perform Map Matching": [[7, "perform-map-matching"]], "Download Datasets from Google Drive": [[8, "download-datasets-from-google-drive"]], "Processed Road Network": [[8, "processed-road-network"]], "Raw Trajectory Dataset": [[8, "raw-trajectory-dataset"]], "Advanced Installation": [[9, "advanced-installation"]], "Quick Start": [[10, "quick-start"]], "Prerequisites": [[10, "prerequisites"]], "Trajectory Recovery": [[10, "trajectory-recovery"]], "Project Structure": [[11, "project-structure"]], "HuggingDragon\u2019s Document": [[12, "huggingdragon-s-document"]], "Fast Installation": [[12, "fast-installation"]], "Features": [[12, "features"]], "Visualization of Trajectory Recovery": [[13, "Visualization-of-Trajectory-Recovery"], [16, "Visualization-of-Trajectory-Recovery"]], "Step 1: Import necessary packages.": [[13, "Step-1:-Import-necessary-packages."], [16, "Step-1:-Import-necessary-packages."]], "Step 2: Load pretrained model.": [[13, "Step-2:-Load-pretrained-model."], [16, "Step-2:-Load-pretrained-model."]], "Step 3: Obtain the outputs": [[13, "Step-3:-Obtain-the-outputs"], [16, "Step-3:-Obtain-the-outputs"]], "Step 4: Visualization": [[13, "Step-4:-Visualization"], [16, "Step-4:-Visualization"]], "Task Supports": [[14, "task-supports"]], "Task: Trajectory Recovery": [[15, "task-trajectory-recovery"]], "Introduction": [[15, "introduction"]], "Formal Definition": [[15, "formal-definition"]], "Citations": [[15, "citations"]]}, "indexentries": {}})